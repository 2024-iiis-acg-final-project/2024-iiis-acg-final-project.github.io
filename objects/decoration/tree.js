import {Group} from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class Tree extends Group{
    constructor(parent, id, cfg) {
        super();
        this.parent = parent;
        this.name = 'tree';
        this.obj_type = 'decoration';
        this.geo = 'none';

        this.cfg = cfg;
        this.dec_id = id;
        
        this.tree = null;
        const loader = new GLTFLoader();
        loader.load( 
            '/objects/models/treePine.glb', 
            function ( glb ) {
                glb.scene.position.set(cfg['x'], cfg['y'], cfg['z'])
                this.tree = glb.scene.clone();
                this.tree.scale.set(1.3, 1.3, 1.3);
                this.parent.add(this.tree);
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


export default Tree;
