import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

class StartScene extends THREE.Scene {
    constructor() {
        super();
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
        // let cube = new THREE.Mesh( geometry, material );
        // cube.position.set(0, 2, 0);
        // this.cube = cube
        // this.add( this.cube );

        let title_mesh;
        let text_mesh;

        var loader = new FontLoader();

        loader.load( './style/font.json', function ( font ) {
            const title_geometry = new TextGeometry( 'Shell Shock', {
                font: font,
                size: 60,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 2
            } );

            const text_geometry = new TextGeometry( 'Press Space to Select Level', {
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
            text_mesh.position.set(text_centerOffset, 10, -1000);
            text_mesh.rotation.set(0, Math.PI * 2, 0);

            this.text_mesh = text_mesh;
            this.add(this.text_mesh);

        }.bind(this) );

        this.add( new THREE.AmbientLight( 0x777777 ) );
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set(100, 100, 100);
        this.add( directionalLight );
        
    }

    update() {
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
    }
}

export default StartScene;