import { Group, PlaneGeometry, Mesh, MeshPhongMaterial, MeshStandardMaterial, BoxGeometry } from "three";

class PlaneGround extends Group {
    constructor(parent){
        
        super();
        this.name = 'plane';
        this.geo = 'plane';
        this.parent = parent;

        this.ground = new Mesh(new PlaneGeometry(100, 100, 1, 1), new MeshPhongMaterial( { color: 0xa0adaf, shininess: 150 } ))
        this.ground.rotation.set(- Math.PI / 2, 0, 0);
        this.ground.position.set(0, -0.5, 0);
        this.ground.receiveShadow = true;

        this.normal = {
            x: 0,
            y: 0,
            z: 1
        };
        var norm_coef = this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z;
        this.normal.x /= norm_coef; this.normal.y /= norm_coef; this.normal.z /= norm_coef;
        this.ground_coef = -0.5;

        this.obj_type = 'ground';
        this.no_collision = false;
        
        parent.addToUpdateList(this);
        this.parent.add(this.ground);
    }

    cal_min_t(position, velocity, radius) {
        var k = velocity.x * this.normal.x + velocity.y * this.normal.y + velocity.z * this.normal.z;
        if (Math.abs(k) < 1e-6) {
            return 2;
        }
        var b1 = - (position.x * this.normal.x + position.y * this.normal.y + position.z * this.normal.z - this.ground_coef + radius);
        var b2 = - (position.x * this.normal.x + position.y * this.normal.y + position.z * this.normal.z - this.ground_coef - radius);
        var x1 = b1 / k, x2 = b2 / k;
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

    update(){
        // this.parent.remove(this.mesh);
        // this.parent.add(this.mesh);
    }
}

export default PlaneGround;