import {default as NormalEnemy} from './NormalEnemy.js';
import {default as BigEnemy} from './BigEnemy.js';

function load_enemy(parent, configs, id) {
    if (configs['id'] == 0) {
        const enemy = new NormalEnemy(parent, configs['x'], configs['y'], configs['z'], id);
    }
    else if (configs['id'] == 1) {
        const  enemy = new BigEnemy(parent, configs['x'], configs['y'], configs['z'], id);
    }
}

export {load_enemy};