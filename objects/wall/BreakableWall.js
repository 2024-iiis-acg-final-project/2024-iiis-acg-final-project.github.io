import { Group, PlaneGeometry, Mesh, MeshPhongMaterial, MeshStandardMaterial, BoxGeometry } from "three";

class BreakableWall extends Group {
    constructor(parent, id, cfg) {
        super();
        this.parent = parent;
        this.name = 'breakable_wall';
        this.obj_type = 'wall';
        this.geo = 'cube';
        this.wall_id = id;
        this.blood = 150;

        this.wall = new Mesh(new BoxGeometry(cfg['length'], cfg['hight'], cfg['width']), new MeshStandardMaterial({color: 0xffff00}));
        this.wall.position.set(cfg['x'], cfg['y'], cfg['z']);

        this.min_x = cfg['x'] - cfg['length'] / 2; this.max_x = cfg['x'] + cfg['length'] / 2;
        this.min_y = cfg['y'] - cfg['hight'] / 2; this.max_y = cfg['y'] + cfg['hight'] / 2;
        this.min_z = cfg['z'] - cfg['width'] / 2; this.max_z = cfg['z'] + cfg['width'] / 2;

        this.no_collision = false;
        // The collision are calcualte by filed, which is different from sphere and plane
        parent.addToUpdateList(this);
        this.parent.add(this.wall);
    }

    get_direction(position) {
        var ret_x = position.x, ret_y = position.y, ret_z = position.z;
        if (ret_x < this.min_x) {
            ret_x = ret_x - this.min_x;
        }
        else if (ret_x > this.max_x) {
            ret_x = ret_x - this.max_x;
        }
        else {
            ret_x = 0;
        }
        if (ret_y < this.min_y) {
            ret_y = ret_y - this.min_y;
        }
        else if (ret_y > this.max_y) {
            ret_y = ret_y - this.max_y;
        }
        else {
            ret_y = 0;
        }
        if (ret_z < this.min_z) {
            ret_z = ret_z - this.min_z;
        }
        else if (ret_z > this.max_z) {
            ret_z = ret_z - this.max_z;
        }
        else {
            ret_z = 0;
        }
        return {
            x: ret_x,
            y: ret_y,
            z: ret_z
        }
    }

    update(){
        this.parent.remove(this.wall);

        if(this.blood > 0) {
            this.wall.material = new MeshStandardMaterial({color: 0xffff00 + Math.floor(0xff * (150 - this.blood) / 150)});
            this.parent.add(this.wall);
        }
        else {
            this.no_collision = true;
        }
    }
}

export default BreakableWall;