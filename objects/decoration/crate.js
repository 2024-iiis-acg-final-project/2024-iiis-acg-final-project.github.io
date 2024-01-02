import {Group} from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Crate extends Group{
    constructor(parent, id, cfg) {
        super();
        this.parent = parent;
        this.name = 'crate';
        this.obj_type = 'decoration';
        this.geo = 'none';

        this.cfg = cfg;
        this.dec_id = id;
        
        this.crate = null;
        const loader = new GLTFLoader();
        loader.load( 
            '/objects/models/crate.glb', 
            function ( glb ) {
                glb.scene.position.set(cfg['x'], cfg['y'], cfg['z'])
                this.crate = glb.scene.clone();
                this.crate.scale.set(1.3, 1.3, 1.3);
                this.parent.add(this.crate);
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


export default Crate;
