/****
 * The main js file. In this file, we should implement:
 *  - Set up render, scene and camera
 *  - Start render loop and handle windows size
 *  - Handle the controller signal from keyboard or click
 ****/
import * as THREE from 'three';
import { StartScene } from './scenes';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { build_new_scene, change_global_info, check_page_change, get_page_info, get_pause_state, Lock, set_page_info, set_pause_state, get_select_direction, set_success_flag, get_pause_click, set_pause_click, get_end_click, set_end_click} from './utils';

var scene = new StartScene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const ReadInfoLock = new Lock();
const WriteInfoLock = new Lock();

var listener = new THREE.AudioListener();

var sound = new THREE.Audio( listener );
var back_music = new THREE.Audio( listener );

var audioLoader = new THREE.AudioLoader();
audioLoader.load( './audio/key-press.wav', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( false );
	sound.setVolume( 0.5 );
	sound.pause();
});
const press_sound = sound;
var hasMusicStarted = false;
var back_music_finish_load = false;

audioLoader.load( './audio/angry-bird.mp3', function( buffer ) {
	back_music.setBuffer( buffer );
	back_music.setLoop( true );
	back_music.setVolume( 0.5 );
	back_music.play();
	back_music_finish_load = true;
});

var win_sound = new THREE.Audio(listener);
var loss_sound = new THREE.Audio(listener);

audioLoader.load( './audio/end-win.mp3', function( buffer ) {
	win_sound.setBuffer( buffer );
	win_sound.setLoop( false );
	win_sound.setVolume( 0.5 );
	win_sound.pause();
});
audioLoader.load( './audio/end-lose.mp3', function( buffer ) {
	loss_sound.setBuffer( buffer );
	loss_sound.setLoop( false );
	loss_sound.setVolume( 0.5 );
	loss_sound.pause();
});


function get_camera() {
	return camera;
}

function get_renderer() {
	return renderer;
}

// Render loop
const onAnimationFrameHandler = (timeStamp) => {
	// if (hasMusicStarted == false && back_music_finish_load == true) {
	// 	hasMusicStarted = true;
	// 	back_music.play();
	// }
	WriteInfoLock.acquire();
	if (!get_pause_state() || get_page_info() != 'play') {
		scene.update();
	}
	if (get_pause_state() && get_page_info() == 'play') {
		scene.update_in_pause_state(renderer);
		const pause_click = get_pause_click();
		if (pause_click == 'continue') {
			set_pause_state(false);
			set_pause_click("none");
		}
		else if (pause_click == 'retry') {
			set_pause_state(false);
			set_pause_click("none");
			scene.reset_camera(camera);
			scene = build_new_scene();
		}
		else if (pause_click == 'exit') {
			set_pause_state(false);
			set_page_info('select');
			set_pause_click("none");
			scene.reset_camera(camera);
			scene = build_new_scene();
			back_music.play();
		}
	}
	if (get_page_info() == 'end') {
		const end_click = get_end_click();
		if (end_click == 'retry') {
			set_pause_state(false);
        	set_page_info('play');
			set_end_click('none');
			scene = build_new_scene();
		}
		else if (end_click == 'exit') {
			set_pause_state(false);
        	set_page_info('select');
			set_end_click('none');
			scene = build_new_scene();
			back_music.play();
		}
	}
	if (get_page_info() == 'play') {
		scene.set_camera(camera);
		if (scene.is_terminal()) {
			scene.reset_camera(camera);
			set_page_info('end');
			set_pause_state(false);
			set_success_flag(scene.success);
			if (scene.success == true) {
				win_sound.play();
			}
			else {
				loss_sound.play();
			}
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
		press_sound.stop();
		press_sound.play();
		WriteInfoLock.acquire();
		const before_page_info = get_page_info();
		if (change_global_info(key)) {
			if (before_page_info == 'play') {
				scene.reset_camera(camera);
			}
			else if(before_page_info == 'select' && get_page_info() == 'play') {
				back_music.stop();
			}
			scene = build_new_scene();
		}
		WriteInfoLock.release();
	}
	else {
		if (get_page_info() == 'play') {
			if (key == 'Enter') {
				WriteInfoLock.acquire();
				scene.update_by_press_key(key);
				WriteInfoLock.release();
			}
			else{
				scene.update_by_press_key(key);
			}
		}
		if (get_page_info() == 'select') {
			scene.update_info(get_select_direction(key));
		}
	}
	ReadInfoLock.release();
	
})

window.addEventListener('keyup', event => {
	const key = event.key;
	if (get_page_info() == 'play') {
		scene.update_by_release_key(key);
	}
})

export {get_camera, get_renderer};