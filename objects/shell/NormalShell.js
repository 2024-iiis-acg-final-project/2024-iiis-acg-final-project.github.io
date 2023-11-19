import {Group, Mesh, SphereGeometry, MeshStandardMaterial} from 'three';

class NormalShell extends Group {
    constructor(parent, id) {
        super();

        this.parent = parent;
        this.shell_id = id;
        this.name = "normal_shell";
        this.obj_type = "shell";

        this.velocity = {
            x: 0,
            y: 0,
            z: 0
        }

        this.velocity_scale = 0.1;
        this.resistances_coef = 0.999;
        this.collision_coef = 0.75;

        this.shell_state = "wait"; // state should in ["wait", "attacking", "used"]

        this.shell = new Mesh(new SphereGeometry(0.1, 32, 32), new MeshStandardMaterial({ color: 0x00ff00 }));

        this.parent.addToUpdateList(this);
        this.parent.add(this.shell);
    }

    set_position (x, y, z) {
        this.shell.position.set(x, y, z);
    }

    update(){
        if (this.shell_state != 'used') {
            this.parent.remove(this.shell);
        }

        if (this.shell_state == 'attacking') {
            
        }

        if (this.shell_state != 'used') {
            this.parent.add(this.shell);
        }
    }
}

export default NormalShell;