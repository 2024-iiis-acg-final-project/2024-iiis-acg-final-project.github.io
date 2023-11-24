import {Group, MeshStandardMaterial, SphereGeometry, Mesh} from 'three';

class NormalEnemy extends Group{
    constructor(parent, x, y, z, id) {
        super();
        this.parent = parent;
        this.name = 'normal_enemy';
        this.obj_type = 'enemy';
        this.geo = 'sphere';

        this.enemy = new Mesh(new SphereGeometry(0.3, 32, 32), new MeshStandardMaterial({ color: 0x0000ff }));
        this.enemy.position.set(x, y, z);

        this.blood = 100;
        this.enemy_id = id;

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
        this.radius = 0.3
        this.no_collision = false;

        this.mass = 10;

        parent.addToUpdateList(this);
        this.parent.add(this.enemy);
    }

    update() {
        if (this.blood > 0) {
            this.parent.remove(this.enemy);
        }

        this.enemy.material = new MeshStandardMaterial({color: 0x0000ff + Math.floor((100 - this.blood) / 100 * 0xff) * (0x10000)});

        this.move_step();
        this.apply_g();
        this.decay_velocity();

        if (this.blood > 0) {
            this.parent.add(this.enemy);
        }
    }

    get_position(){
        return this.enemy.position;
    }

    is_fix() {
        return false;
    }

    move_time(t) {
        this.enemy.position.x += this.velocity.x * t;
        this.enemy.position.y += this.velocity.y * t;
        this.enemy.position.z += this.velocity.z * t;
        this.enemy.rotation.x += this.angle_velocity.x * t;
        this.enemy.rotation.y += this.angle_velocity.y * t;
        this.enemy.rotation.z += this.angle_velocity.z * t;
    }

    move_step() {
        var remain_step = 1.0;
        for (let i = 0; i < 4; i++) {
            // In one step, collision happen up to 4 times for one object
            var min_t = remain_step;
            var min_object = null;
            var index = 0, min_index = -1;
            for (let object of this.parent.update_list) {
                if (object.obj_type == 'enemy') {
                    if (object.enemy_id == this.enemy_id) {
                        continue;
                    }
                }
                if (object.no_collision == true) {
                    continue;
                }
                let this_t = object.cal_min_t(this.enemy.position, this.velocity, this.radius);
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

    decay_velocity() {
        this.velocity.x *= 0.999; this.velocity.y *= 0.999; this.velocity.z *= 0.999;
        this.angle_velocity.x *= 0.999; this.angle_velocity.y *= 0.999; this.angle_velocity.z *= 0.999;
    }

    apply_g() {
        this.velocity.y -= 0.001;
    }

    cal_min_t(position, velocity, radius) {
        // Line equation: position + t * velocity
        var a = velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z;
        var b = 2 * (velocity.x * (this.enemy.x - position.x) + 
                     velocity.y * (this.enemy.y - position.y) + 
                     velocity.z * (this.enemy.z - position.z))
        var c = (this.enemy.x - position.x) * (this.enemy.x - position.x) +
                (this.enemy.y - position.y) * (this.enemy.y - position.y) +
                (this.enemy.z - position.z) * (this.enemy.z - position.z) -
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
}

export default NormalEnemy;