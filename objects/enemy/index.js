import {default as NormalEnemy} from './NormalEnemy.js';

function load_enemy(parent, configs, id) {
    if (configs['id'] == 0) {
        const enemy = new NormalEnemy(parent, configs['x'], configs['y'], configs['z'], id);
    }
}

export {load_enemy};