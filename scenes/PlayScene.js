import {AmbientLight, DirectionalLight, PointLight, Scene, MeshStandardMaterial, Color, Mesh, Group} from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { load_ground } from '../objects/grounds';
import { load_launch_pad } from '../objects/launchPad';
import { load_enemy } from '../objects/enemy';
import { load_shell } from '../objects/shell';
import { load_wall } from '../objects/wall';
import { load_tool } from '../objects/tool';

class PlayScene extends Scene {
    constructor(level) {
        super();

        this.update_list = []
        this.in_loading = true;
        fetch('./configs/level-' + String(level) + '.json')
            .then(resopnse => resopnse.json())
            .then(levelConfigs => {
                load_ground(levelConfigs["gound_name"], this);
                load_launch_pad(levelConfigs['launch_pad'], this);

                this.pad_x = levelConfigs['launch_pad']['x'];
                this.pad_y = levelConfigs['launch_pad']['y'];
                this.pad_z = levelConfigs['launch_pad']['z'];

                var enemy_id = 0;
                for (let enemy_cfg of levelConfigs['enemy']) {
                    load_enemy(this, enemy_cfg, enemy_id);
                    enemy_id += 1;
                }
                var shell_id = 0;
                for (let shell_type of levelConfigs['shell']) {
                    load_shell(this, shell_type, shell_id);
                    shell_id += 1;
                }
                this.final_shell_id = shell_id;
                var wall_id = 0;
                for (let wall_cfg of levelConfigs['wall']) {
                    load_wall(this, wall_cfg['id'], wall_id, wall_cfg['cfg']);
                    wall_id += 1;
                }
                var tool_id = 0;
                for (let tool_cfg of levelConfigs['tool'] ) {
                    load_tool(this, tool_cfg, tool_id);
                    tool_id += 1;
                }
                this.in_loading = false;
            })
            .then(error => {
                console.error('Error:', error)
            })

        this.add_light();
        this.debug_cnt = 0;
        this.pause_state = false;

        this.ending_clock = -1;
        this.success = false;
    }

    addToUpdateList(object) {
        this.update_list.push(object);
    }

    add_light() {
        this.normal_light_list = []
        this.normal_light_list.push(new AmbientLight( 0x777777 ));
        const directionalLight = new DirectionalLight( 0xffffff, 3 );
        directionalLight.position.set(100, 100, 100);
        this.normal_light_list.push(directionalLight);

        const pointLight1 = new PointLight(0xffffff, 1);
        pointLight1.position.set(-1, 1, -1);
        this.normal_light_list.push(pointLight1);
        const pointLight2 = new PointLight(0xffffff, 1);
        pointLight2.position.set(-1, 1, 1);
        this.normal_light_list.push(pointLight2);
        const pointLight3 = new PointLight(0xffffff, 1);
        pointLight3.position.set(1, 1, -1);
        this.normal_light_list.push(pointLight3);
        const pointLight4 = new PointLight(0xffffff, 1);
        pointLight4.position.set(1, 1, 1);
        this.normal_light_list.push(pointLight4);

        for (let light of this.normal_light_list) {
            this.add(light);
        }

        this.pause_light_list = []
        const pause_directionalLight = new DirectionalLight( 0xffffff, 0.1 );
        pause_directionalLight.position.set(10, 100, 20);
        this.pause_light_list.push(new AmbientLight( 0x777777 ));
        this.pause_light_list.push(pause_directionalLight);    
    }

    update_in_pause_state() {
        if (this.pause_state == false) {
            this.pause_state = true;

            for (let object of this.update_list) {
                if (object.obj_type == 'launch_pad') {
                    object.unrender_force();
                }
            }

            for (let light of this.normal_light_list) {
                this.remove(light);
            }
            for (let light of this.pause_light_list) {
                this.add(light);
            }
            const loader = new FontLoader();

            // Continue
            this.continue_text = null;
            loader.load('./style/helvetiker_regular.typeface.json', function (font) {
                const textString = "ontinue";
                var geometry = new TextGeometry(textString, {
                    font: font,
                    size: 12,
                    height: 1,
                    bevelEnabled: true,
                    bevelThickness: 0.5,
                    bevelSize: 0.3,
                    bevelSegments: 0.5
                });

                geometry.computeBoundingBox();
                geometry.center();

                const mainMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0x00ff00, emissiveIntensity: 0.4 });
                const highlightMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xff0000, emissiveIntensity: 0.8 });

                const textMesh = new Mesh(geometry, mainMaterial);
                const cGeometry = new TextGeometry("C", { font: font, size: 12, height: 1 });

                cGeometry.computeBoundingBox();
                cGeometry.center();

                const cMesh = new Mesh(cGeometry, highlightMaterial);
                cMesh.position.set(textMesh.position.x - 33, textMesh.position.y, textMesh.position.z);

                const resetTextMesh = new Group();
                resetTextMesh.add(textMesh);
                resetTextMesh.add(cMesh);

                const scaleValue = 0.01;
                resetTextMesh.scale.set(scaleValue, scaleValue, scaleValue);

                resetTextMesh.position.set(1, 1.926, 1.043);
                resetTextMesh.rotation.set(-Math.PI / 6, 0, 0);

                this.continue_text = resetTextMesh;
                this.add(this.continue_text);
            }.bind(this));

            // Retry
            this.continue_text = null;
            loader.load('./style/helvetiker_regular.typeface.json', function (font) {
                const textString = "etry";
                var geometry = new TextGeometry(textString, {
                    font: font,
                    size: 12,
                    height: 1,
                    bevelEnabled: true,
                    bevelThickness: 0.5,
                    bevelSize: 0.3,
                    bevelSegments: 0.5
                });

                geometry.computeBoundingBox();
                geometry.center();

                const mainMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xff7700, emissiveIntensity: 0.4 });
                const highlightMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xff0000, emissiveIntensity: 0.8 });

                const textMesh = new Mesh(geometry, mainMaterial);
                const cGeometry = new TextGeometry("R", { font: font, size: 12, height: 1 });

                cGeometry.computeBoundingBox();
                cGeometry.center();

                const cMesh = new Mesh(cGeometry, highlightMaterial);
                cMesh.position.set(textMesh.position.x - 20, textMesh.position.y + 1.8, textMesh.position.z);

                const resetTextMesh = new Group();
                resetTextMesh.add(textMesh);
                resetTextMesh.add(cMesh);

                const scaleValue = 0.01;
                resetTextMesh.scale.set(scaleValue, scaleValue, scaleValue);

                resetTextMesh.position.set(1, 1.637, 1.21);
                resetTextMesh.rotation.set(-Math.PI / 6, 0, 0);

                this.retry_text = resetTextMesh;
                this.add(this.retry_text);
            }.bind(this));

            // Exit
            this.exit_text = null;
            loader.load('./style/helvetiker_regular.typeface.json', function (font) {
                const textString = "xit";
                var geometry = new TextGeometry(textString, {
                    font: font,
                    size: 12,
                    height: 1,
                    bevelEnabled: true,
                    bevelThickness: 0.5,
                    bevelSize: 0.3,
                    bevelSegments: 0.5
                });

                geometry.computeBoundingBox();
                geometry.center();

                const mainMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0x00aaff, emissiveIntensity: 0.4 });
                const highlightMaterial = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xff0000, emissiveIntensity: 0.8 });

                const textMesh = new Mesh(geometry, mainMaterial);
                const cGeometry = new TextGeometry("E", { font: font, size: 12, height: 1 });

                cGeometry.computeBoundingBox();
                cGeometry.center();

                const cMesh = new Mesh(cGeometry, highlightMaterial);
                cMesh.position.set(textMesh.position.x - 14, textMesh.position.y - 0.2, textMesh.position.z);

                const resetTextMesh = new Group();
                resetTextMesh.add(textMesh);
                resetTextMesh.add(cMesh);

                const scaleValue = 0.01;
                resetTextMesh.scale.set(scaleValue, scaleValue, scaleValue);

                resetTextMesh.position.set(1, 1.348, 1.377);
                resetTextMesh.rotation.set(-Math.PI / 6, 0, 0);

                this.exit_text = resetTextMesh;
                this.add(this.exit_text);
            }.bind(this));
        }
    }

    remove_pause_state() {
        this.pause_state = false;
        for (let light of this.pause_light_list) {
            this.remove(light);
        }
        for (let light of this.normal_light_list) {
            this.add(light);
        }
        if (this.continue_text != null) {
            this.remove(this.continue_text);
        }
        if (this.retry_text != null) {
            this.remove(this.retry_text);
        }
        if (this.exit_text != null) {
            this.remove(this.exit_text);
        }
    }

    check_for_end() {
        for (let object of this.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_state == 'attacking') {
                    return;
                }
            }
        }

        var enemy_left = false;
        for (let object of this.update_list) {
            if (object.obj_type == 'enemy') {
                if (object.blood > 0) {
                    enemy_left = true;
                    break;
                }
            }
        }
        if (enemy_left == false) {
            this.success = true;
            this.ending_clock = 51;
        }
        
        var shell_left = false;
        for (let object of this.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_state == 'wait') {
                    shell_left = true;
                }
            }
        }
        if (shell_left == false) {
            this.success = false;
            this.ending_clock = 51;
        }
    }

    change_ending_light() {
        if (this.ending_clock == 50) {
            for (let light of this.normal_light_list) {
                this.remove(light);
            }
        }
        else {
            for (let light of this.ending_light_list) {
                this.remove(light);
            }
        }
        this.ending_light_list = []

        this.ending_light_list.push(new AmbientLight( Math.floor(0x77 * this.ending_clock / 50) * 0x010101 ));
        const directionalLight = new DirectionalLight( 0xffffff, 3 * this.ending_clock / 50 );
        directionalLight.position.set(100, 100, 100);
        this.ending_light_list.push(directionalLight);

        const pointLight1 = new PointLight(0xffffff, 1 * this.ending_clock / 50);
        pointLight1.position.set(-1, 1, -1);
        this.ending_light_list.push(pointLight1);
        const pointLight2 = new PointLight(0xffffff, 1 * this.ending_clock / 50);
        pointLight2.position.set(-1, 1, 1);
        this.ending_light_list.push(pointLight2);
        const pointLight3 = new PointLight(0xffffff, 1 * this.ending_clock / 50);
        pointLight3.position.set(1, 1, -1);
        this.ending_light_list.push(pointLight3);
        const pointLight4 = new PointLight(0xffffff, 1 * this.ending_clock / 50);
        pointLight4.position.set(1, 1, 1);
        this.ending_light_list.push(pointLight4);

        for (let light of this.ending_light_list) {
            this.add(light);
        }
    }

    update() {
        if (this.pause_state == true) {
            this.remove_pause_state();
        }
        if (this.in_loading == true) {
            return;
        }
        if (this.ending_clock == -1) {
            this.check_for_end();
        }
        if (this.ending_clock > 0) {
            this.ending_clock -= 1;
            this.change_ending_light();
            return;
        }
        var wait_shell_x = this.pad_x + 0.2;
        var attacking_flag = false;
        for (let object of this.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_state == 'attacking') {
                    attacking_flag = true;
                }
            }
        }
        if (attacking_flag == false) {
            for (let object of this.update_list) {
                if (object.obj_type == 'launch_pad') {
                    object.attacking = false;
                }
            }
        }
        for (let object of this.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_state == 'wait') {
                    wait_shell_x += 0.3;
                    object.set_position(wait_shell_x, this.pad_y, this.pad_z);
                }
            }
            object.update()
        }
        // this.debug_cnt = this.debug_cnt + 1;
        // if (this.debug_cnt == 1000) {
        //     this.debug_cnt = 0;
        //     var alive_cnt = 0;
        //     for (let object of this.update_list) {
        //         if (object.obj_type == 'enemy') {
        //             if(object.blood > 0) {
        //                 alive_cnt += 1;
        //             }
        //         }
        //     }
        //     window.alert("Alive:" + String(alive_cnt));
        // }
    }

    set_first_shell_attack(force, x_angle, y_angle, length) {
        var unit_length = {
            x: 0,
            y: 0,
            z: -1
        }
        var t1 = unit_length.y, t2 = unit_length.z;
        unit_length.y = t1 * Math.cos(x_angle) - t2 * Math.sin(x_angle);
        unit_length.z = t1 * Math.sin(x_angle) + t2 * Math.cos(x_angle);
        t1 = unit_length.z; t2 = unit_length.x;
        unit_length.z = t1 * Math.cos(y_angle) - t2 * Math.sin(y_angle);
        unit_length.x = t1 * Math.sin(y_angle) + t2 * Math.cos(y_angle);
        
        for (let object of this.update_list) {
            if (object.obj_type == 'shell') {
                if (object.shell_state == 'wait') {
                    object.shell_state = 'attacking';
                    object.velocity = {
                        x: unit_length.x * force * 0.1,
                        y: unit_length.y * force * 0.1,
                        z: unit_length.z * force * 0.1
                    }
                    object.set_position(this.pad_x + unit_length.x * length,
                                        this.pad_y + unit_length.y * length,
                                        this.pad_z + unit_length.z * length);
                    break;
                }
            }
        }
    }

    is_terminal() {
        return (this.ending_clock == 0);
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
            key == 'Enter' || key == ' ') {
            for (let object of this.update_list) {
                if (object.name == 'launch_pad') {
                    object.update_by_press_key(key);
                }
                if (object.name == 'bomb_shell' && object.shell_state == 'attacking' && key == ' ') {
                    object.shell_state = 'used';
                }
            }
        }
    }

    update_by_release_key(key) {
        if (key == 'ArrowLeft' || key == 'ArrowRight' || 
            key == 'ArrowUp' || key == 'ArrowDown' ||
            key == 'Enter' || key == ' ') {
            for (let object of this.update_list) {
                if (object.name == 'launch_pad') {
                    object.update_by_release_key(key);
                }
            }
        }
    }

}

export default PlayScene;