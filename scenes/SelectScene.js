import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { get_level, set_level } from '../utils';

class SelectScene extends THREE.Scene {
    constructor() {
        super();
        const geometry = new THREE.BoxGeometry( 100, 100, 100 );
        const material = new THREE.MeshStandardMaterial( { color: 0x0ffff0 } );
        const material1 = new THREE.MeshStandardMaterial( { color: 0xffffff } );

        this.cubes= []
        
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                let cube = new THREE.Mesh( geometry, material1 );
                cube.position.set(200*(j-1), 200*(1-i), -1000);
                this.cubes.push(cube);
            }
        }

        let title_mesh;
        let text_mesh;

        var loader = new FontLoader();

        loader.load( './style/font.json', function ( font ) {
            const title_geometry = new TextGeometry( 'Select Level', {
                font: font,
                size: 60,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 2
            } );

            const text_geometry = new TextGeometry( 'Press up, down, left, right keys to move', {
                font: font,
                size: 60,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 2
            } );

            title_geometry.computeBoundingBox();
            const centerOffset = - 0.5 * ( title_geometry.boundingBox.max.x - title_geometry.boundingBox.min.x );

            const title_material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
            title_mesh = new THREE.Mesh(title_geometry, title_material);
            
            title_mesh.position.set(centerOffset, 100, -300);
            title_mesh.rotation.set(0, Math.PI * 2, 0);

            this.title_mesh = title_mesh;
            this.add(this.title_mesh);

            text_geometry.computeBoundingBox();
            const text_material = new THREE.MeshStandardMaterial( { color: 0xf7dd19 } );
            text_mesh = new THREE.Mesh(text_geometry, title_material);

            const text_centerOffset = - 0.5 * ( text_geometry.boundingBox.max.x - text_geometry.boundingBox.min.x );
            text_mesh.position.set(text_centerOffset, -500, -1000);
            text_mesh.rotation.set(0, Math.PI * 2, 0);

            this.text_mesh = text_mesh;
            this.add(this.text_mesh);

        }.bind(this) );

        this.add( new THREE.AmbientLight( 0x777777 ) );
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set(100, 100, 100);
        this.add( directionalLight );

        this.state = {
            track: 0
        };
        this.state.track=get_level()-1;
        this.cubes[this.state.track].material=material;

        for (let cube of this.cubes) {
            this.add(cube);
        }

        // window.alert(String(this.state.track));
        
    }

    update() {
        for (let cube of this.cubes) {
            this.remove(cube);
            this.add(cube);
        }
    }

    update_info(direction) {
        const material = new THREE.MeshStandardMaterial( { color: 0x0ffff0 } );
        const material1 = new THREE.MeshStandardMaterial( { color: 0xffffff } );
        //  window.alert("Dir:" + String(direction));
        //  window.alert("Tra:" + String(this.state.track));
        if(direction==1 && this.state.track %3!=2){
            
        //  window.alert("Tra:" + String(this.state.track));
            this.cubes[this.state.track].material=material1;
            this.state.track++;
            this.cubes[this.state.track].material=material;
            
        //  window.alert("Tra:" + String(this.state.track));
        }
        if(direction==-1 && this.state.track %3!=0){
            this.cubes[this.state.track].material=material1;
            this.state.track--;
            this.cubes[this.state.track].material=material;
        }
        if(direction==3 && this.state.track <=5){
            this.cubes[this.state.track].material=material1;
            this.state.track+=3;
            this.cubes[this.state.track].material=material;
        }
        if(direction==-3 && this.state.track >=3){
            this.cubes[this.state.track].material=material1;
            this.state.track-=3;
            this.cubes[this.state.track].material=material;
        }
        set_level(this.state.track+1);
    }
}

export default SelectScene;