import {Group, Mesh, SphereGeometry, MeshStandardMaterial} from 'three';
import {SphereWithPlane, SphereWithSphere} from '../../pyhsis'

class NormalShell extends Group {
    constructor(parent, id) {
        super();

        this.parent = parent;
        this.shell_id = id;
        this.name = "normal_shell";
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
        this.radius = 0.1
        this.small_velocity_period = 0

        this.mass = 1;

        this.shell_state = "wait"; // state should in ["wait", "attacking", "used"]

        this.shell = new Mesh(new SphereGeometry(0.1, 32, 32), new MeshStandardMaterial({ color: 0x00ff00 }));

        this.parent.addToUpdateList(this);
        this.parent.add(this.shell);
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
        this.shell.rotation.x += this.angle_velocity.x * t;
        this.shell.rotation.y += this.angle_velocity.y * t;
        this.shell.rotation.z += this.angle_velocity.z * t;
    }

    move_step() {
        if (this.velocity_norm() < 0.01) {
            this.small_velocity_period += 1;
        }
        if (this.small_velocity_period > 500) {
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
                if (object.obj_type == 'shell') {
                    if (object.shell_id == this.shell_id) {
                        continue;
                    }
                }
                if (object.no_collision == true) {
                    continue;
                }
                let this_t = object.cal_min_t(this.shell.position, this.velocity, this.radius);
                if (this_t < 0 || this_t >= remain_step) {
                    continue;
                }
                if (this_t < min_t) {
                    min_t = this_t;
                    min_object = object;
                    min_index = index;
                }
                index += 1;
            }
            if (min_object == null) {
                break;
            }
            else {
                this.move_time(min_t);
                remain_step -= min_t;
                
                if (min_object.geo == 'sphere') {
                    var ret = SphereWithSphere(this.get_position(), this.velocity, this.angle_velocity, this.radius, this.mass,
                                               min_object.get_position(), min_object.velocity, min_object.angle_velocity, 
                                               min_object.radius, min_object.mass);
                    this.velocity = ret.new_velocity1;
                    this.angle_velocity = ret.new_angle_velocity1;
                    if (min_object.is_fix() == false) {
                        this.parent.update_list[min_index].velocity = ret.new_velocity2;
                        this.parent.update_list[min_index].angle_velocity = ret.new_angle_velocity2;
                    }
                    if (min_object.obj_type == 'enemy') {
                        var energy = 0.5 * this.mass * (this.velocity.x * this.velocity.x + 
                                                        this.velocity.y * this.velocity.y +
                                                        this.velocity.z * this.velocity.z);
                        this.parent.update_list[min_index].blood -= 500 * energy;
                        if (this.parent.update_list[min_index].blood < 0){
                            this.parent.remove(this.parent.update_list[min_index]);
                        }
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

    cal_min_t(position, velocity, radius) {
        // Line equation: position + t * velocity
        var a = velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z;
        var b = 2 * (velocity.x * (this.shell.x - position.x) + 
                     velocity.y * (this.shell.y - position.y) + 
                     velocity.z * (this.shell.z - position.z))
        var c = (this.shell.x - position.x) * (this.shell.x - position.x) +
                (this.shell.y - position.y) * (this.shell.y - position.y) +
                (this.shell.z - position.z) * (this.shell.z - position.z) -
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
        if (x2 < 1e-4) {
            return 2;
        }
        if (x1 < 0) {
            return x2;
        }
        return x1;
    }

    decay_velocity() {
        this.velocity.x *= 0.999; this.velocity.y *= 0.999; this.velocity.z *= 0.999;
        this.angle_velocity.x *= 0.999; this.angle_velocity.y *= 0.999; this.angle_velocity.z *= 0.999;
    }

    apply_g() {
        this.velocity.y -= 0.001;
    }

    update(){
        if (this.shell_state != 'used') {
            this.parent.remove(this.shell);
        }

        if (this.shell_state == 'attacking') {
            this.move_step();
            this.apply_g();
            this.decay_velocity();
        }

        if (this.shell_state != 'used') {
            this.parent.add(this.shell);
        }
    }
}

export default NormalShell;