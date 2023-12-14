import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';
import { get_camera, get_renderer } from '../main';
import { set_end_click } from '../utils';

class EndScene extends THREE.Scene {
    constructor(success) {
        super();

        if (success == true) {
            const titleTexture = new TextureLoader().load('./objects/picture/win.png');
            const titleMaterial = new MeshBasicMaterial({ map: titleTexture,
                                                        alphaTest: 0,
                                                        transparent: true});
            const titleGeometry = new PlaneGeometry(5.41, 1.68);
            this.title = new Mesh(titleGeometry, titleMaterial);
            this.title.position.set(0, 2, 0);
            this.add(this.title);
        }
        else {
            const titleTexture = new TextureLoader().load('./objects/picture/loss.png');
            const titleMaterial = new MeshBasicMaterial({ map: titleTexture,
                                                        alphaTest: 0,
                                                        transparent: true});
            const titleGeometry = new PlaneGeometry(5.82, 1.65);
            this.title = new Mesh(titleGeometry, titleMaterial);
            this.title.position.set(0, 2, 0);
            this.add(this.title);
        }

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
        
        // Retry
        this.retry_text = null;
        const retryTexture = new TextureLoader().load('./objects/picture/pause-retry.png');
        const retryMaterial = new MeshBasicMaterial({ map: retryTexture,
                                                      alphaTest: 0.01,
                                                      transparent: true});
        const retryGeometry = new PlaneGeometry(1.0275, 0.21);
        this.retry_text = new Mesh(retryGeometry, retryMaterial);
        this.retry_text.position.set(-0.8, -0.2, 3.5);
        this.add(this.retry_text);

        // Exit
        this.exit_text = null;
        const exitTexture = new TextureLoader().load('./objects/picture/pause-back.png');
        const ecitMaterial = new MeshBasicMaterial({ map: exitTexture,
                                                     alphaTest: 0.01,
                                                     transparent: true});
        const ecitGeometry = new PlaneGeometry(1.0275, 0.21);
        this.exit_text = new Mesh(ecitGeometry, ecitMaterial);
        this.exit_text.position.set(0.8, -0.2, 3.5);
        this.add(this.exit_text);

        const renderer = get_renderer();

        this.onMouseMoveHandler = this.onMouseMove.bind(this);
        renderer.domElement.addEventListener('mousemove', this.onMouseMoveHandler, false);

        this.onMouseClickHandler = this.onMouseClick.bind(this);
        renderer.domElement.addEventListener('click', this.onMouseClickHandler, false);

    }

    onMouseMove(event) {
        const mouse = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        };

        const raycaster = new THREE.Raycaster();
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        const camera = get_camera();
        vector.unproject(camera);
        raycaster.set(camera.position, vector.sub(camera.position).normalize());

        const scalableObjects = [this.retry_text, this.exit_text];

        const intersects = raycaster.intersectObjects(scalableObjects);

        if (intersects.length > 0) {
            const hoveredObject = intersects[0].object;
            const scaleFactor = 1.2; // Adjust this value to control the scaling factor

            if (hoveredObject.scale.x !== scaleFactor) {
                hoveredObject.scale.set(scaleFactor, scaleFactor, scaleFactor);
            }
        } else {
            for (const obj of scalableObjects) {
                if (obj.scale.x !== 1) {
                    obj.scale.set(1, 1, 1);
                }
            }
        }
    }

    onMouseClick(event) {
        const mouse = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        };

        const raycaster = new THREE.Raycaster();
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        const camera = get_camera();
        vector.unproject(camera);
        raycaster.set(camera.position, vector.sub(camera.position).normalize());

        const clickableObjects = [this.retry_text, this.exit_text];

        const intersects = raycaster.intersectObjects(clickableObjects);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            if (clickedObject === this.retry_text) {
                set_end_click("retry");
            } else if (clickedObject === this.exit_text) {
                set_end_click("exit");
            }
        }
    }

    destructor(){
        const renderer = get_renderer();
        renderer.domElement.removeEventListener('mousemove', this.onMouseMoveHandler);
        renderer.domElement.removeEventListener('click', this.onMouseClickHandler, false);
    }

    update() {
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