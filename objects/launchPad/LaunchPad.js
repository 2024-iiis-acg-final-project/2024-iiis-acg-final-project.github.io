import { BufferAttribute, BufferGeometry, Group, Mesh, MeshPhongMaterial, MeshStandardMaterial, MeshNormalMaterial } from "three";
import * as THREE from "three";

class LaunchPad extends Group {
    constructor(parent, x, y, z) {
        super();
        
        this.parent = parent;
        this.name = 'launch_pad';
        this.obj_type = 'launch_pad';

        const vertices = new Float32Array([
            -0.2, -0.2, 0.2,
            0.2, -0.2, 0.2,
            0.2, -0.2, -0.2,
            -0.2, -0.2, -0.2,
            -0.2, 0.2, 0.2,
            0.2, 0.2, 0.2,
            0.2, 0.2, -0.2,
            -0.2, 0.2, -0.2,
            -0.1, 0.1, -0.2,
            0.1, 0.1, -0.2,
            0.1, -0.1, -0.2,
            -0.1, -0.1, -0.2,
            -0.1, 0.1, -1,
            0.1, 0.1, -1,
            0.1, -0.1, -1,
            -0.1, -0.1, -1
        ]);

        const faces = new Uint16Array([
            0, 1, 5,
            0, 5, 4,
            1, 2, 6,
            1, 6, 5,
            3, 0, 4,
            3, 4, 7,
            0, 2, 1,
            0, 3, 2,
            4, 5, 6,
            4, 6, 7,
            7, 8, 11,
            7, 11, 3,
            3, 9, 10,
            3, 10, 2,
            2, 10, 9,
            2, 9, 6,
            6, 9, 8,
            6, 8, 7,
            8, 12, 11,
            12, 15, 11,
            8, 9, 12,
            13, 12, 9,
            9, 10, 14,
            9, 14, 13,
            11, 14, 10,
            11, 15, 14,
            14, 15, 13,
            15, 12, 13
        ]);

        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        geometry.setIndex(new BufferAttribute(faces, 1));
        geometry.computeVertexNormals();

        this.launch_pad = new Mesh(geometry, new MeshStandardMaterial({color: 0xff0000}));

        this.launch_pad.position.set(x, y, z);

        this.parent.addToUpdateList(this);

        this.max_y = Math.PI / 4;
        this.min_y = - Math.PI / 4;
        this.max_x = Math.PI / 8 * 3;
        this.min_x = 0;
        this.step = 0.01;

        this.left_move = false;
        this.right_move = false;
        this.up_move = false;
        this.down_move = false;
                
        this.force = 0;
        this.max_force = 100;
        this.last_in_press = false;
        this.in_press = false;

        this.attacking = false;

    }

    update_launch_info() {
        if (this.left_move) {
            this.launch_pad.rotation.y += this.step;
        }
        if (this.right_move) {
            this.launch_pad.rotation.y -= this.step;
        }
        if (this.launch_pad.rotation.y < this.min_y) {
            this.launch_pad.rotation.y = this.min_y;
        }
        if (this.launch_pad.rotation.y > this.max_y) {
            this.launch_pad.rotation.y = this.max_y;
        }
        if (this.up_move) {
            this.launch_pad.rotation.x += this.step;
        }
        if (this.down_move) {
            this.launch_pad.rotation.x -= this.step;
        }
        if (this.launch_pad.rotation.x < this.min_x) {
            this.launch_pad.rotation.x = this.min_x;
        }
        if (this.launch_pad.rotation.x > this.max_x) {
            this.launch_pad.rotation.x = this.max_x;
        }
        if (this.in_press) {
            if (this.last_in_press == false) {
                this.force = 0;
                this.last_in_press = true;
            }
            else {
                this.force += this.step;
            }
        }
        else {
            this.last_in_press = false;
        }
    }

    update() {
        this.parent.remove(this.launch_pad);
        if (!this.attacking) {
            this.update_launch_info();
        }
        this.parent.add(this.launch_pad);
    }

    update_by_press_key(key) {
        if (!this.attacking) {
            if (key == 'ArrowLeft') {
                this.left_move = true;
            }
            if (key == 'ArrowRight') {
                this.right_move = true;
            }
            if (key == 'ArrowUp') {
                this.up_move = true;
            }
            if (key == 'ArrowDown') {
                this.down_move = true;
            }
            if (key == ' ') {
                this.in_press = true;
            }
            if ( key == 'Enter' ) {
                this.left_move = false;
                this.right_move = false;
                this.up_move = false;
                this.down_move = false;
                this.in_press = false;
                this.last_in_press = false;
                this.attacking = true;
                // Doing attacking animation
            }
        }
    }

    update_by_release_key(key) {
        if (!this.attacking) {
            if (key == 'ArrowLeft') {
                this.left_move = false;
            }
            if (key == 'ArrowRight') {
                this.right_move = false;
            }
            if (key == 'ArrowUp') {
                this.up_move = false;
            }
            if (key == 'ArrowDown') {
                this.down_move = false;
            }
            if (key == ' ') {
                this.in_press = false;
            }
        }
    }
    
}

export default LaunchPad;