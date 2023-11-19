import { LessCompare } from "three";

let PAGE_STATE = "start";
let LEVEL = 0;
let ON_PAUSE = false;

function get_page_info() {
    return PAGE_STATE;
}

function get_level() {
    return LEVEL;
}

function get_pause_state() {
    return ON_PAUSE;
}

function set_page_info(page_state) {
    PAGE_STATE = page_state;
}

function set_level(level) {
    LEVEL = level;
}

function set_pause_state(state) {
    ON_PAUSE = state;
}

function get_select_direction(key){
    const page_info = get_page_info()
    if (page_info == 'select' && key == "ArrowLeft") {
        return -1;
    }
    if (page_info == 'select' && key == "ArrowRight") {
        return 1;
    }
    if (page_info == 'select' && key == "ArrowUp") {
        return -3;
    }
    if (page_info == 'select' && key == "ArrowDown") {
        return 3;
    }
    return 0;
}


export {get_page_info, set_page_info, get_level, set_level, get_pause_state, set_pause_state, get_select_direction}