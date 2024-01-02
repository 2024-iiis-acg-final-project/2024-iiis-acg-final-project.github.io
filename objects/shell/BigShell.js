import {Group, Mesh, SphereGeometry, MeshStandardMaterial, AudioLoader, AudioListener, Audio, Quaternion, Euler} from 'three';
import {SphereWithPlane, SphereWithSphere, damage} from '../../pyhsis'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import SubBigShell from './SubBigShell';

class BigShell extends Group {
    constructor(parent, id) {
        super();

        this.parent = parent;
        this.shell_id = id;
        this.name = "big_shell";
        this.obj_type = "shell";
        this.geo = 'sphere';

        this.velocity = {
            x: 0,
            y: 0,
            z: 0
        }
        this.angle_velocity = {
            x: 0,
            y: 0,
            z: 0
        }
        this.no_collision = false;
        this.radius = 0.15;
        this.small_velocity_period = 0;

        this.collision_happened = false;
        this.subshell_created = false;

        this.mass = 30;

        this.shell_state = "wait"; // state should in ["wait", "attacking", "used"]

        const loader = new GLTFLoader();

        loader.load(
            '/objects/models/pokemonball.glb',
            function ( glb ) {
                this.shell = glb.scene.clone();
                this.shell.scale.set(0.0036, 0.0036, 0.0036);
                this.parent.add(this.shell);
                this.parent.addToUpdateList(this);
            }.bind(this),
            undefined,
            function ( err ) {
                window.alert( 'An error happened.' );
            });

        // this.shell = new Mesh(new SphereGeometry(0.15, 32, 32), new MeshStandardMaterial({ color: 0x00ff00 }));

        // this.parent.addToUpdateList(this);
        // this.parent.add(this.shell);
        this.remove_flag = false;

        var listener = new AudioListener();
        var bombSound = new Audio(listener);
        var audioLoader = new AudioLoader();

        audioLoader.load('/audio/bomb.mp3', function (buffer) {
            bombSound.setBuffer(buffer);
            bombSound.setLoop(false);
            bombSound.setVolume(0.5);
            bombSound.pause();
        });

        this.bomb_sound = bombSound;
    }

    set_position (x, y, z) {
        this.shell.position.set(x, y, z);
    }

    velocity_norm() {
        return Math.sqrt(this.velocity.x * this.velocity.x + 
                         this.velocity.y * this.velocity.y + 
                         this.velocity.z * this.velocity.z)
    }

    move_time(t) {
        this.shell.position.x += this.velocity.x * t;
        this.shell.position.y += this.velocity.y * t;
        this.shell.position.z += this.velocity.z * t;
        // this.shell.rotation.x += this.angle_velocity.x * t;
        // this.shell.rotation.y += this.angle_velocity.y * t;
        // this.shell.rotation.z += this.angle_velocity.z * t;

        var deltaQuaternion = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),  // X轴
            this.angle_velocity.x * t
        ).multiply(
            new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),  // Y轴
                this.angle_velocity.y * t
            )
        ).multiply(
            new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 0, 1),  // Z轴
                this.angle_velocity.z * t
            )
        );
        var currentQuaternion = new Quaternion().setFromEuler(
            new Euler(
                this.shell.rotation.x,
                this.shell.rotation.y,
                this.shell.rotation.z,
                'XYZ'
            )
        );
        currentQuaternion.multiply(deltaQuaternion);
        this.shell.rotation.setFromQuaternion(currentQuaternion, 'XYZ');

        if (this.shell.position.x < -15 || this.shell.position.x > 15 ||
            this.shell.position.y < -100 || this.shell.position.y > 100 ||
            this.shell.position.z < -15 || this.shell.position.z > 2) {
                this.shell_state = 'used';
        }
    }

    move_step() {
        if (this.velocity_norm() < 0.01) {
            this.small_velocity_period += 1;
        }
        if (this.small_velocity_period > 200) {
            this.shell_state = 'used';
            return;
        }
        var remain_step = 1.0;
        for (let i = 0; i < 4; i++) {
            // In one step, collision happen up to 4 times for one object
            var min_t = remain_step;
            var min_object = null;
            var index = 0, min_index = -1;
            for (let object of this.parent.update_list) {
                index += 1;
                if (object.obj_type == 'shell') {
                    if (object.shell_id == this.shell_id) {
                        continue;
                    }
                }
                if (object.no_collision == true || object.geo == 'cube') {
                    continue;
                }
                let this_t = object.cal_min_t(this.shell.position, this.velocity, this.radius);
                if (this_t < -1e-2 || this_t >= remain_step) {
                    continue;
                }
                if (this_t < min_t) {
                    min_t = this_t;
                    min_object = object;
                    min_index = index - 1;
                }
            }
            if (min_object == null) {
                break;
            }
            else {
                this.move_time(min_t);
                remain_step -= min_t;
                this.collision_happened = true;
                
                if (min_object.geo == 'sphere') {
                    var ret = SphereWithSphere(this.get_position(), this.velocity, this.angle_velocity, this.radius, this.mass,
                                               min_object.get_position(), min_object.velocity, min_object.angle_velocity, 
                                               min_object.radius, min_object.mass);
                    
                    if (min_object.obj_type == 'enemy') {
                        var relative_velocity = {
                            x: this.velocity.x - min_object.velocity.x,
                            y: this.velocity.y - min_object.velocity.y,
                            z: this.velocity.z - min_object.velocity.z
                        }
                        var energy = 0.5 * this.mass * (relative_velocity.x * relative_velocity.x + 
                                                        relative_velocity.y * relative_velocity.y +
                                                        relative_velocity.z * relative_velocity.z);
                        this.parent.update_list[min_index].blood -= damage(energy);
                    }

                    this.velocity = ret.new_velocity1;
                    this.angle_velocity = ret.new_angle_velocity1;
                    if (min_object.is_fix() == false) {
                        this.parent.update_list[min_index].velocity = ret.new_velocity2;
                        this.parent.update_list[min_index].angle_velocity = ret.new_angle_velocity2;
                    }
                }
                else if (min_object.geo == 'plane') {
                    var retp = SphereWithPlane(this.velocity, this.angle_velocity, this.radius, min_object.normal);
                    this.velocity = retp.new_velocity;
                    this.angle_velocity = retp.new_angle_velocity;
                }
                else {
                    // Not support now.
                }
            }
        }
        this.move_time(remain_step);

        for (let object of this.parent.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_id == this.shell_id) {
                    continue;
                }
            }
            if (object.no_collision == true) {
                continue;
            }
            if (object.obj_type == 'wall') {
                var ret_vector = object.get_direction(this.get_position());
                var ret_norm = Math.sqrt(ret_vector.x * ret_vector.x + ret_vector.y * ret_vector.y + ret_vector.z * ret_vector.z);
                if (ret_norm > this.radius) {
                    continue;
                }
                if(ret_norm > 1e-8) {
                    this.collision_happened = true;
                    ret_vector.x /= ret_norm; ret_vector.y /= ret_norm; ret_vector.z /= ret_norm;
                    var dir_test = this.velocity.x * ret_vector.x + this.velocity.y * ret_vector.y + this.velocity.z * ret_vector.z;
                    if(dir_test > 0) {
                        continue;
                    }
                    dir_test = - dir_test;
                    var discount_coef = 0.9;
                    var new_velocity = {
                        x: (this.velocity.x + 2 * ret_vector.x * dir_test) * discount_coef + ret_vector.x * 0.001 / ret_norm,
                        y: (this.velocity.y + 2 * ret_vector.y * dir_test) * discount_coef + ret_vector.y * 0.001 / ret_norm,
                        z: (this.velocity.z + 2 * ret_vector.z * dir_test) * discount_coef + ret_vector.z * 0.001 / ret_norm
                    }
                    var energy = 0.5 * this.mass * (this.velocity.x * this.velocity.x + 
                                                    this.velocity.y * this.velocity.y +
                                                    this.velocity.z * this.velocity.z);
                    if (object.name == 'breakable_wall') {
                        object.blood -= damage(energy);
                    }
                    this.velocity = new_velocity;
                }
                continue;
            }
            if (object.is_intersect(this.shell.position, this.radius)) {
                var ret_vector = null;
                this.collision_happened = true;
                if (object.geo == 'sphere') {
                    var tmp1 = object.get_position(), tmp2 = this.get_position();
                    ret_vector = {
                        x: tmp2.x - tmp1.x,
                        y: tmp2.y - tmp1.y,
                        z: tmp2.z - tmp1.z
                    }
                    // this.apply_anti_force_from_position(object.get_position());
                }
                else if (object.geo == 'plane') {
                    var test_dir = object.normal.x * this.get_position().x + 
                                   object.normal.y * this.get_position().y +
                                   object.normal.z * this.get_position().z -
                                   object.ground_coef;
                    // var test_norm = object.normal;
                    ret_vector = {
                        x: object.normal.x,
                        y: object.normal.y,
                        z: object.normal.z
                    }
                    if(test_dir < 0) {
                        ret_vector.x *= -1; ret_vector.y *= -1; ret_vector.z *= -1;
                        // test_norm.x = - test_norm.x; test_norm.y = - test_norm.y; test_norm.z = - test_norm.z;
                        // test_dir = - test_dir;
                    }
                    
                    // this.velocity.x += test_norm.x * 0.001 / test_dir;
                    // this.velocity.y += test_norm.y * 0.001 / test_dir;
                    // this.velocity.z += test_norm.z * 0.001 / test_dir;
                }
                else {
                    // Not support yet
                    ret_vector = {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
                var ret_norm = Math.sqrt(ret_vector.x * ret_vector.x + ret_vector.y * ret_vector.y + ret_vector.z * ret_vector.z);
                if(ret_norm > 1e-8) {
                    ret_vector.x /= ret_norm; ret_vector.y /= ret_norm; ret_vector.z /= ret_norm;
                    var dir_test = this.velocity.x * ret_vector.x + this.velocity.y * ret_vector.y + this.velocity.z * ret_vector.z;
                    if(dir_test > 0) {
                        continue;
                    }
                    dir_test = - dir_test;
                    var new_velocity = {
                        x: (this.velocity.x + 2 * ret_vector.x * dir_test) + ret_vector.x * 0.001 / ret_norm,
                        y: (this.velocity.y + 2 * ret_vector.y * dir_test) + ret_vector.y * 0.001 / ret_norm,
                        z: (this.velocity.z + 2 * ret_vector.z * dir_test) + ret_vector.z * 0.001 / ret_norm
                    }
                    this.velocity = new_velocity;
                }
            }
        }
    }

    get_position() {
        return this.shell.position;
    }

    is_fix() {
        if (this.shell_state != 'wait') {
            return false;
        }
        return true;
    }

    is_intersect(position, radius) {
        var c = (this.shell.position.x - position.x) * (this.shell.position.x - position.x) +
                (this.shell.position.y - position.y) * (this.shell.position.y - position.y) +
                (this.shell.position.z - position.z) * (this.shell.position.z - position.z) -
                (this.radius + radius) * (this.radius + radius);
        if (c < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    apply_anti_force_from_position(position) {
        var force_vector = {
            x: this.shell.position.x - position.x,
            y: this.shell.position.y - position.y,
            z: this.shell.position.z - position.z
        }
        var f_norm = Math.sqrt(force_vector.x * force_vector.x + force_vector.y * force_vector.y + force_vector.z * force_vector.z);
        force_vector.x /= f_norm; force_vector.y /= f_norm; force_vector.z /= f_norm;
        this.velocity.x += force_vector.x * 0.001 / f_norm;
        this.velocity.y += force_vector.y * 0.001 / f_norm;
        this.velocity.z += force_vector.z * 0.001 / f_norm;
    }


    cal_min_t(position, velocity, radius) {
        // Line equation: position + t * velocity
        var a = velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z;
        var b = 2 * (velocity.x * (this.shell.position.x - position.x) + 
                     velocity.y * (this.shell.position.y - position.y) + 
                     velocity.z * (this.shell.position.z - position.z))
        var c = (this.shell.position.x - position.x) * (this.shell.position.x - position.x) +
                (this.shell.position.y - position.y) * (this.shell.position.y - position.y) +
                (this.shell.position.z - position.z) * (this.shell.position.z - position.z) -
                (this.radius + radius) * (this.radius + radius);
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            return 2;
        }
        if (Math.abs(delta) < 1e-6) {
            var x = - b / (2 * a);
            if (x < 1e-4) {
                return 2;
            }
            else {
                return x;
            }
        }
        var x1 = (- b + Math.sqrt(delta)) / (2 * a);
        var x2 = (- b - Math.sqrt(delta)) / (2 * a);
        if (x1 > x2) {
            var t = x1; x1 = x2; x2 = t;
        }
        if (x2 < 1e-2) {
            return 2;
        }
        if (x1 < -1e-2) {
            return x2;
        }
        return x1;
    }

    decay_velocity() {
        this.velocity.x *= 0.999; this.velocity.y *= 0.999; this.velocity.z *= 0.999;
        this.angle_velocity.x *= 0.999; this.angle_velocity.y *= 0.999; this.angle_velocity.z *= 0.999;
    }

    apply_g() {
        for (let object of this.parent.update_list) {
            if (object.name == 'plane') {
                // A trick to avoid small jump
                if (object.is_intersect(this.get_position(), this.radius)){
                    return;
                }
                if (object.is_intersect(this.get_position(), this.radius + 0.01)){
                    this.velocity.y -= 0.0001;
                    return;
                }
            }
        }
        this.velocity.y -= 0.001;
    }

    update(){
        if (this.shell_state != 'used' && this.remove_flag == true) {
            this.remove_flag = false;
            this.parent.add(this.shell);
        }
        // if(this.remove_flag == false) {
        //     this.remove_flag = true;
        //     this.parent.remove(this.shell);
        // }

        if (this.shell_state == 'attacking') {
            this.move_step();
            this.apply_g();
            this.decay_velocity();
        }

        if (this.collision_happened == true) {
            this.shell_state = 'used';
            if (this.subshell_created == false) {
                this.bomb_sound.play();
                this.subshell_created = true;
                var sub_shell_num = Math.floor(Math.random() * 3) + 3;
                for (let i = 0; i < 16; i++) { // At most try 16 times
                    if (sub_shell_num == 0) {
                        break;
                    }
                    let u = Math.random(), v = Math.random();
                    let theta = 2 * Math.PI * u, phi = Math.acos(2 * v - 1);
                    let v_norm = Math.random() / 2 + 0.75;
                    var new_velocity = {
                        x: Math.sin(phi) * Math.cos(theta) * v_norm ,
                        y: Math.sin(phi) * Math.sin(theta) * v_norm ,
                        z: Math.cos(phi) * v_norm 
                    }
                    var new_position = {
                        x: this.get_position().x + new_velocity.x * this.radius,
                        y: this.get_position().y + new_velocity.y * this.radius,
                        z: this.get_position().z + new_velocity.z * this.radius
                    }
                    new_velocity.x = new_velocity.x * 0.1 + this.velocity.x;
                    new_velocity.y = new_velocity.y * 0.1 + this.velocity.y;
                    new_velocity.z = new_velocity.z * 0.1 + this.velocity.z;

                    // If the new shell has intersection with other object, this generation will be consider as failure
                    var fail_flag = false;
                    for (let object of this.parent.update_list){
                        if (object.no_collision == true) {
                            continue;
                        }
                        if (object.obj_type != 'plane') {
                            continue;
                        }
                        if (object.is_intersect(new_position, 0.075)) {
                            fail_flag = true;
                            break;
                        }
                    }
                    if(fail_flag == true) {
                        continue;
                    }
                    const sub_shell = new SubBigShell(this.parent, this.parent.final_shell_id, new_position, new_velocity);
                    this.parent.final_shell_id += 1;
                    sub_shell_num --;
                }
            }
        }

        if (this.shell_state == 'used') {
            this.no_collision = true;
            if (this.remove_flag == false) {
                this.remove_flag = true;
                this.parent.remove(this.shell);
            }
        }
    }
}

export default BigShell;