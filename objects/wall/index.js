import {default as NormalWall} from './NormalWall.js';

function load_wall(parent, type, id, cfg){
    if (type == 0) {
        const wall = new NormalWall(parent, id, cfg);
    }
}

export {load_wall};