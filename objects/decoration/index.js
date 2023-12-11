import {default as Tree} from './tree.js';

function load_deco(parent, type, id, cfg){
    if (type == 0) {
        const tree = new Tree(parent, id, cfg);
    }
}

export {load_deco};