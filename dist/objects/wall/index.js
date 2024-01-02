import {default as NormalWall} from './NormalWall.js';
import {default as BreakableWall} from './BreakableWall.js';

function load_wall(parent, type, id, cfg){
    if (type == 0) {
        const wall = new NormalWall(parent, id, cfg);
    }
    else if (type == 1) {
        const wall = new BreakableWall(parent, id, cfg);
    }
}

export {load_wall};