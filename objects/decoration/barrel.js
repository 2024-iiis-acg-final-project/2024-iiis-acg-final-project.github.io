import {Group} from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Barrel extends Group{
    constructor(parent, id, cfg) {
        super();
        this.parent = parent;
        this.name = 'barrel';
        this.obj_type = 'decoration';
        this.geo = 'none';

        this.cfg = cfg;
        this.dec_id = id;
        
        this.barrel = null;
        const loader = new GLTFLoader();
        loader.load( 
            './objects/models/barrel.glb', 
            function ( glb ) {
                glb.scene.position.set(cfg['x'], cfg['y'], cfg['z'])
                this.barrel = glb.scene.clone();
                this.barrel.scale.set(1.3, 1.3, 1.3);
                this.parent.add(this.barrel);
            }.bind(this),
            undefined,
            function ( err ) {
                window.alert( 'An error happened.' );
            });

        this.parent.addToUpdateList(this);
        this.no_collision = true;
    }
    update(){
    }
}


export default Barrel;