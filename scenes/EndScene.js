import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';

class EndScene extends THREE.Scene {
    constructor(success) {
        super();
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        cube.position.set(0, 2, 0);
        this.cube = cube
        this.add( this.cube );

        let title_mesh;

        this.success = success;

        var loader = new FontLoader();

        loader.load( './style/font.json', function ( font ) {
            var textString = "You Win!";
            if (this.success == false) {
                textString = "You Loss!";
            }
            const title_geometry = new TextGeometry( textString, {
                font: font,
                size: 70,
                height: 20,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 2,
                bevelSize: 1.5
            } );

            title_geometry.computeBoundingBox();
            const centerOffset = - 0.5 * ( title_geometry.boundingBox.max.x - title_geometry.boundingBox.min.x );

            const title_material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
            title_mesh = new THREE.Mesh(title_geometry, title_material);
            
            title_mesh.position.set(centerOffset, -30, -500);
            title_mesh.rotation.set(0, Math.PI * 2, 0);

            this.title_mesh = title_mesh;
            this.add(this.title_mesh);
        }.bind(this) );

        this.add( new THREE.AmbientLight( 0x777777 ) );
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set(100, 100, 100);
        this.add( directionalLight );

        const bgTexture = new TextureLoader().load('./objects/picture/background2.png');

        const bgGeometry = new PlaneGeometry(1280, 720);
        const bgMaterial = new MeshBasicMaterial({ map: bgTexture, side: THREE.DoubleSide });
        this.backgroundMesh = new Mesh(bgGeometry, bgMaterial);
        this.backgroundMesh.position.set(0, 0, -250); // Adjust the Z position to be behind other objects
        this.add(this.backgroundMesh);
        
    }

    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        const elapsedTime = Date.now() * 0.001; // Convert to seconds

        // Calculate movement based on elapsed time
        const speedX = 0.2;
        const speedY = 0.5;
        const movementX = Math.sin(elapsedTime * speedX);
        const movementY = Math.cos(elapsedTime * speedY);

        // Update background position
        this.backgroundMesh.position.set(movementX * 200, movementY * 100, -250);
    }
}

export default EndScene;