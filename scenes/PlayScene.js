import {AmbientLight, DirectionalLight, PointLight, Scene} from 'three';
import { load_ground } from '../objects/grounds';
import { load_launch_pad } from '../objects/launchPad';

class PlayScene extends Scene {
    constructor(level) {
        super();
        this.update_list = []
        fetch('./configs/level-' + String(level) + '.json')
            .then(resopnse => resopnse.json())
            .then(levelConfigs => {
                load_ground(levelConfigs["gound_name"], this);
                load_launch_pad(levelConfigs['launch_pad'], this);
            })
            .then(error => {
                console.error('Error:', error)
            })

        this.add_light();
    }

    addToUpdateList(object) {
        this.update_list.push(object);
    }

    add_light() {
        this.add( new AmbientLight( 0x777777 ) );
        const directionalLight = new DirectionalLight( 0xffffff, 3 );
        directionalLight.position.set(100, 100, 100);
        this.add( directionalLight );

        const pointLight1 = new PointLight(0xffffff, 1);
        pointLight1.position.set(-1, 1, -1);
        this.add( pointLight1 );
        const pointLight2 = new PointLight(0xffffff, 1);
        pointLight2.position.set(-1, 1, 1);
        this.add( pointLight2 );
        const pointLight3 = new PointLight(0xffffff, 1);
        pointLight3.position.set(1, 1, -1);
        this.add( pointLight3 );
        const pointLight4 = new PointLight(0xffffff, 1);
        pointLight4.position.set(1, 1, 1);
        this.add( pointLight4 );
    }

    update() {
        for (let object of this.update_list) {
            object.update()
        }
    }

    is_terminal() {
        return false;
    }

    set_camera(camera) {
        camera.position.set(1, 2, 2);
        camera.rotation.set(-Math.PI / 6, 0, 0);
    }

    reset_camera(camera) {
        camera.position.set(0, 0, 5);
        camera.rotation.set(0, 0, 0);
    }

    update_by_press_key(key) {
        if (key == 'ArrowLeft' || key == 'ArrowRight' || 
            key == 'ArrowUp' || key == 'ArrowDown' ||
            key == 'Enter') {
            for (let object of this.update_list) {
                if (object.name == 'launch_pad') {
                    object.update_by_press_key(key);
                }
            }
        }
    }

    update_by_release_key(key) {
        if (key == 'ArrowLeft' || key == 'ArrowRight' || 
            key == 'ArrowUp' || key == 'ArrowDown' ||
            key == 'Enter') {
            for (let object of this.update_list) {
                if (object.name == 'launch_pad') {
                    object.update_by_release_key(key);
                }
            }
        }
    }

}

export default PlayScene;