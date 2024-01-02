import {default as LaunchPad} from './LaunchPad.js'

function load_launch_pad(position, parent) {
    const object = new LaunchPad(parent, position['x'], position['y'], position['z']);
}

export {load_launch_pad};
