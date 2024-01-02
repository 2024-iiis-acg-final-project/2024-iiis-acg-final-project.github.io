import {default as Tree} from './tree.js';
import {default as Crate} from './crate.js';
import {default as Barrel} from './barrel.js';

function load_deco(parent, type, id, cfg){
    if (type == 0) {
        const tree = new Tree(parent, id, cfg);
    }
    if (type == 1) {
        const crate = new Crate(parent, id, cfg);
    }
    if (type == 2) {
        const barrel = new Barrel(parent, id, cfg);
    }
}

export {load_deco};