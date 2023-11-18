import { Group, PlaneGeometry, Mesh, MeshPhongMaterial, MeshStandardMaterial, BoxGeometry } from "three";
// import { Group } from "three";

class PlaneGround extends Group {
    constructor(parent){
        
        super();
        this.name = 'plane';
        this.parent = parent;

        this.ground = new Mesh(new PlaneGeometry(100, 100, 1, 1), new MeshPhongMaterial( { color: 0xa0adaf, shininess: 150 } ))
        this.ground.rotation.set(- Math.PI / 2, 0, 0);
        this.ground.position.set(0, -0.5, 0);
        this.ground.receiveShadow = true;

        this.obj_type = 'ground';
        
        parent.addToUpdateList(this);
        this.parent.add(this.ground);
    }

    update(){
        // this.parent.remove(this.mesh);
        // this.parent.add(this.mesh);
    }
}

export default PlaneGround;