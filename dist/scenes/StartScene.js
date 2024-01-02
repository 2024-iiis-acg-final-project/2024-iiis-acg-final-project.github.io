import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';

class StartScene extends THREE.Scene {
    constructor() {
        super();

        const titleTexture = new TextureLoader().load('./objects/picture/title.png');
        const titleMaterial = new MeshBasicMaterial({ map: titleTexture,
                                                      alphaTest: 0,
                                                      transparent: true});
        const titleGeometry = new PlaneGeometry(6.06144, 1.49184);
        this.title = new Mesh(titleGeometry, titleMaterial);
        this.title.position.set(0, 2, 0);
        this.add(this.title);

        const subtitleTexture = new TextureLoader().load('./objects/picture/subtitle.png');
        const subtitleMaterial = new MeshBasicMaterial({ map: subtitleTexture,
                                                         alphaTest: 0,
                                                         transparent: true});
        const subtitleGeometry = new PlaneGeometry(2.81, 0.505);
        this.subtitle = new Mesh(subtitleGeometry, subtitleMaterial);
        this.subtitle.position.set(2, 1.2, 1.1);
        this.subtitle.rotation.set(0, 0, Math.PI / 8)
        this.add(this.subtitle);

        const pressTexture = new TextureLoader().load('./objects/picture/press.png');
        const pressMaterial = new MeshBasicMaterial({ map: pressTexture,
                                                      alphaTest: 0,
                                                      transparent: true});
        const pressGeometry = new PlaneGeometry(4.46, 0.78);
        this.press = new Mesh(pressGeometry, pressMaterial);
        this.press.position.set(0, -0.5, 0);
        this.add(this.press);
        
        const bgTexture = new TextureLoader().load('./objects/picture/background2.png');

        const bgGeometry = new PlaneGeometry(1280, 720);
        const bgMaterial = new MeshBasicMaterial({ map: bgTexture, side: THREE.DoubleSide });
        this.backgroundMesh = new Mesh(bgGeometry, bgMaterial);
        this.backgroundMesh.position.set(0, 0, -250); // Adjust the Z position to be behind other objects
        this.add(this.backgroundMesh);
    }

    update() {
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        const elapsedTime = Date.now() * 0.001; // Convert to seconds

        // Calculate movement based on elapsed time
        const speedX = 0.2;
        const speedY = 0.5;
        const movementX = Math.sin(elapsedTime * speedX);
        const movementY = Math.cos(elapsedTime * speedY);

        // Update background position
        this.backgroundMesh.position.set(movementX * 200, movementY * 100, -250);

        const speed_sub_title = 2;
        const movementSubTitle = Math.sin(elapsedTime * speed_sub_title);
        this.subtitle.position.z = 1 + movementSubTitle * 0.1;
    }
}

export default StartScene;