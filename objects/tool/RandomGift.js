import {Group, Mesh, SphereGeometry, MeshStandardMaterial, BoxGeometry} from 'three';
import { load_shell } from '../shell';

class RandomGift extends Group {
    constructor(parent, id, x, y, z) {
        super();
        this.parent = parent;
        // window.alert("IN");
        this.name = "random_gift";
        this.obj_type = "tool";
        this.geo = 'sphere';
        this.tool_id = id;

        this.tool = new Mesh(new BoxGeometry(0.2, 0.2, 0.2), new MeshStandardMaterial({ color: 0x00ffff }));
        this.tool.position.set(x, y, z);
        this.tool.rotation.set(Math.PI / 4, 0, Math.PI / 4);

        this.radius = 0.2;
        this.used = false;
        this.remove_flag = false;
        this.no_collision = true;
        
        this.parent.addToUpdateList(this);
        this.parent.add(this.shell);
    }

    get_position() {
        return this.tool.position;
    }

    update() {
        if(this.remove_flag == false) {
            this.parent.remove(this.tool);
            this.remove_flag = true;
        }

        if (this.used == false) {
            this.tool.rotation.y += 0.01;
            for(let object of this.parent.update_list) {
                if (object.obj_type == 'shell' && object.shell_state == 'attacking') {
                    var dist_vec = {
                        x: object.get_position().x - this.get_position().x,
                        y: object.get_position().y - this.get_position().y,
                        z: object.get_position().z - this.get_position().z
                    }
                    var dist = Math.sqrt(dist_vec.x * dist_vec.x + dist_vec.y * dist_vec.y + dist_vec.z * dist_vec.z);
                    if (dist < this.radius + object.radius) {
                        this.used = true;
                        var tmp = Math.random();
                        if (tmp < 0.6) {
                            load_shell(this.parent, 0, this.parent.final_shell_id);
                            this.parent.final_shell_id += 1;
                        }
                        else if (tmp < 0.9) {
                            load_shell(this.parent, 1, this.parent.final_shell_id);
                            this.parent.final_shell_id += 1;
                        }
                        else {
                            load_shell(this.parent, 2, this.parent.final_shell_id);
                            this.parent.final_shell_id += 1;
                        }
                    }
                }
            }
        }

        if(this.used == false) {
            this.remove_flag = false;
            this.parent.add(this.tool);
        }
    }
}

export default RandomGift;