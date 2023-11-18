import {default as PlaneGround} from './PlaneGround.js'

function load_ground(ground_name, parent){
    if (ground_name == 'plane') {
        const ground = new PlaneGround(parent);
    }
}

export {load_ground}