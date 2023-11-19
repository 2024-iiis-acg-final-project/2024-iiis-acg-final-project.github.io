import {default as NormalShell} from './NormalShell.js';

function load_shell(parent, type, id){
    if (type == 0) {
        const shell = new NormalShell(parent, id);
    }
}

export {load_shell};