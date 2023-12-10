import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { set_level } from '../utils';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';

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

        const titleTexture = new TextureLoader().load('./objects/picture/select-level.png');
        const titleMaterial = new MeshBasicMaterial({ map: titleTexture,
                                                      alphaTest: 0,
                                                      transparent: true});
        const titleGeometry = new PlaneGeometry(8.13, 1.2);
        this.title = new Mesh(titleGeometry, titleMaterial);
        this.title.position.set(0, 3, 0);
        this.add(this.title);

        const pressTexture = new TextureLoader().load('./objects/picture/press2.png');
        const pressMaterial = new MeshBasicMaterial({ map: pressTexture,
                                                      alphaTest: 0,
                                                      transparent: true});
        const pressGeometry = new PlaneGeometry(6.19, 0.63);
        this.press = new Mesh(pressGeometry, pressMaterial);
        this.press.position.set(0, -2.5, 0);
        this.add(this.press);

        this.add( new THREE.AmbientLight( 0x777777 ) );
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set(100, 100, 100);
        this.add( directionalLight );

        this.state = {
            track: 0
        };

        this.cubes[this.state.track].material=material;

        for (let cube of this.cubes) {
            this.add(cube);
        }

        const bgTexture = new TextureLoader().load('./objects/picture/background2.png');

        const bgGeometry = new PlaneGeometry(1280, 720);
        const bgMaterial = new MeshBasicMaterial({ map: bgTexture, side: THREE.DoubleSide });
        this.backgroundMesh = new Mesh(bgGeometry, bgMaterial);
        this.backgroundMesh.position.set(0, 0, -250); // Adjust the Z position to be behind other objects
        this.add(this.backgroundMesh);
        
    }

    update() {
        for (let cube of this.cubes) {
            this.remove(cube);
            this.add(cube);
        }

        const elapsedTime = Date.now() * 0.001; // Convert to seconds

        // Calculate movement based on elapsed time
        const speedX = 0.2;
        const speedY = 0.5;
        const movementX = Math.sin(elapsedTime * speedX);
        const movementY = Math.cos(elapsedTime * speedY);

        // Update background position
        this.backgroundMesh.position.set(movementX * 200, movementY * 100, -250);
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