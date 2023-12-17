import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { get_level, set_level } from '../utils';
import { TextureLoader, PlaneGeometry, MeshBasicMaterial, Mesh, AudioLoader, AudioListener, Audio } from 'three';

class SelectScene extends THREE.Scene {
    constructor() {
        super();

        this.cubes = [];
        this.select_cube = null;
        this.finish_load_flag = false;

        var loader = new GLTFLoader();
        loader.load(
            './objects/models/block.glb',
            function(object) {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const add_obj = object.scene.clone();
                        add_obj.position.set(2 * j - 2, 1.2 - i * 1.5, 0);
                        add_obj.scale.set(0.9, 0.9, 0.1);
                        this.cubes.push(add_obj);
                    }
                }
                this.finish_load_flag = true;
                this.onLoadComplete();
            }.bind(this),
            undefined,
            function ( err ) {
                window.alert( 'An error happened.' );
            });

        this.onLoadComplete = function () {
            for (let cube of this.cubes) {
                this.add(cube);
            }
        };

        this.set_level_1 = function() {
            this.remove(this.cubes[this.state.track]);
            const pos = this.get_position();
            this.select_cube.position.set(2 * pos.y - 2, 1.2 - pos.x * 1.5, 0);
            this.add(this.select_cube);
        };

        this.digital_numbers = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const dig = i * 3 + j;
                const digitalTexture = new TextureLoader().load('./objects/picture/digital-' + String(dig + 1) + '.png');
                const digitalMaterial = new MeshBasicMaterial({ map: digitalTexture,
                                                                alphaTest: 0,
                                                                transparent: true});
                const digitalGeometry = new PlaneGeometry(0.93 * 0.6, 1.52 * 0.6);
                const add_dig = new Mesh(digitalGeometry, digitalMaterial);
                add_dig.position.set(2 * j - 2, 1.6 - i * 1.5, 0.05);
                this.digital_numbers.push(add_dig);
            }
        }

        for (let dig of this.digital_numbers) {
            this.add(dig);
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
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
        directionalLight.position.set(5, 5, 5);
        this.add( directionalLight );

        this.state = {
            track: 0
        };
        this.state.track = get_level() - 1;

        loader.load(
            './objects/models/blockSnow.glb',
            function(object) {
                const add_obj = object.scene.clone();
                add_obj.scale.set(0.9, 0.9, 0.1);
                this.select_cube = add_obj;
                this.set_level_1();
            }.bind(this),
            undefined,
            function ( err ) {
                window.alert( 'An error happened.' );
            });

        for (let cube of this.cubes) {
            this.add(cube);
        }

        const bgTexture = new TextureLoader().load('./objects/picture/background2.png');

        const bgGeometry = new PlaneGeometry(1280, 720);
        const bgMaterial = new MeshBasicMaterial({ map: bgTexture, side: THREE.DoubleSide });
        this.backgroundMesh = new Mesh(bgGeometry, bgMaterial);
        this.backgroundMesh.position.set(0, 0, -250); // Adjust the Z position to be behind other objects
        this.add(this.backgroundMesh);

        var listener = new AudioListener();
        var sound = new Audio( listener );
        var audioLoader = new AudioLoader();
        audioLoader.load( './audio/switch.wav', function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop( false );
            sound.setVolume( 0.5 );
            sound.pause();
        });

        this.switch_sound = sound;
        
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

    get_position() {
        return {
            x: Math.floor(this.state.track / 3),
            y: this.state.track % 3
        }
    }

    update_info(direction) {
        this.remove(this.select_cube);
        this.add(this.cubes[this.state.track]);

        if (direction == 1 && this.state.track % 3 != 2) {
            this.state.track ++;
            this.switch_sound.stop();
            this.switch_sound.play();
        }
        if (direction == -1 && this.state.track % 3 != 0) {
            this.state.track --;
            this.switch_sound.stop();
            this.switch_sound.play();
        }
        if (direction == 3 && this.state.track <= 5) {
            this.state.track += 3;
            this.switch_sound.stop();
            this.switch_sound.play();
        }
        if (direction == -3 && this.state.track >= 3) {
            this.state.track -= 3;
            this.switch_sound.stop();
            this.switch_sound.play();
        }

        const pos = this.get_position();
        this.select_cube.position.set(2 * pos.y - 2, 1.2 - pos.x * 1.5, 0);
        this.add(this.select_cube);
        this.remove(this.cubes[this.state.track]);

        set_level (this.state.track + 1);
    }
}

export default SelectScene;