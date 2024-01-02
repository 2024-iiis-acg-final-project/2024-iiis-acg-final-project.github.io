import {default as RandomGift} from './RandomGift.js';

function load_tool(parent, cfg, id){
    if (cfg['id'] == 0) {
        const tool = new RandomGift(parent, id, cfg['x'], cfg['y'], cfg['z']);
    }
}

export {load_tool};