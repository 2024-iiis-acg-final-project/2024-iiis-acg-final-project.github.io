/****
 * The main js file. In this file, we should implement:
 *  - Set up render, scene and camera
 *  - Start render loop and handle windows size
 *  - Handle the controller signal from keyboard or click
 ****/
import * as THREE from 'three';
import { StartScene } from './scenes';
import { EndScene } from './scenes';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new StartScene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	scene.cube.rotation.x += 0.01;
	scene.cube.rotation.y += 0.01;

	if (scene.add_mesh_flag) {
		// scene.text_mesh.rotation.x += 0.01;
		// scene.text_mesh.rotation.y += 0.01;
	}

	renderer.render( scene, camera );
}

if ( WebGL.isWebGLAvailable() ) {
    animate();
}
else {
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}