import { LessCompare } from "three";

let PAGE_STATE = "start";
let PAUSE_CLICK = "none";
let END_CLICK = "none";
let LEVEL = 1;
let ON_PAUSE = false;
let SUCCESS_FLAG = false;

function get_page_info() {
    return PAGE_STATE;
}

function get_level() {
    return LEVEL;
}

function get_pause_state() {
    return ON_PAUSE;
}

function get_success_flag() {
    return SUCCESS_FLAG;
}

function get_pause_click() {
    return PAUSE_CLICK;
}

function get_end_click() {
    return END_CLICK;
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

function set_success_flag(success) {
    SUCCESS_FLAG = success;
}

function set_pause_click(click) {
    PAUSE_CLICK = click;
}

function set_end_click(click) {
    END_CLICK = click;
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


export {get_page_info, set_page_info, get_level, set_level, get_pause_state, 
        set_pause_state, get_select_direction, set_success_flag, get_success_flag,
        get_pause_click, set_pause_click, get_end_click, set_end_click}