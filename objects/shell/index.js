import {default as NormalShell} from './NormalShell.js';
import {default as BigShell } from './BigShell.js';
import {default as BombShell} from './BombShell.js';

function load_shell(parent, type, id){
    if (type == 0) {
        const shell = new NormalShell(parent, id);
    }
    if (type == 1) {
        const shell = new BigShell(parent, id);
    }
    if (type == 2) {
        const shell = new BombShell(parent, id);
    }
}

export {load_shell};