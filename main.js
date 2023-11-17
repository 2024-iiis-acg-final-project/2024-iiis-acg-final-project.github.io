/****
 * The main js file. In this file, we should implement:
 *  - Set up render, scene and camera
 *  - Start render loop and handle windows size
 *  - Handle the controller signal from keyboard or click
 ****/
import * as THREE from 'three';
import { StartScene } from './scenes';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { build_new_scene, change_global_info, check_page_change, get_page_info, get_pause_state, Lock, set_page_info, set_pause_state } from './utils';

var scene = new StartScene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const ReadInfoLock = new Lock();
const WriteInfoLock = new Lock();

// Render loop
const onAnimationFrameHandler = (timeStamp) => {
	WriteInfoLock.acquire();
	if (get_page_info() == 'play') {
		scene.update_time_stamp(timeStamp, !get_pause_state());
	}
	if (!get_pause_state() || get_page_info() != 'play') {
		scene.update();
	}
	if (get_page_info() == 'play') {
		if (scene.is_terminal()) {
			set_page_info('end');
			set_pause_state(false);
			scene = build_new_scene();
		}
	}
	renderer.render( scene, camera );
	WriteInfoLock.release();

	window.requestAnimationFrame(onAnimationFrameHandler);
}

window.requestAnimationFrame(onAnimationFrameHandler);

// Resize Handler
const windowResizeHandler = () => {
    const { innerHeight, innerWidth } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
};
windowResizeHandler();
window.addEventListener('resize', windowResizeHandler, false);

window.addEventListener('keydown', event => {
    const key = event.key;
    ReadInfoLock.acquire();
	if (check_page_change(key)) {
		WriteInfoLock.acquire();
		if (change_global_info(key)) {
			scene = build_new_scene();
		}
		WriteInfoLock.release();
	}
	ReadInfoLock.release();
})