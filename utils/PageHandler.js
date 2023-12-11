import { get_page_info, set_page_info, get_level, set_level, get_pause_state, set_pause_state } from "./global.js";

function check_page_change(key) {
    const page_info = get_page_info()
    if (page_info == 'start' && key == ' ') {
        return true;
    }
    if (page_info == 'select' && key == ' ') {
        return true;
    }
    if (page_info == 'play' && get_pause_state() == false && key == 'e') {
        return true;
    }
    // if (page_info == 'play' && get_pause_state() == true && key == 'r') {
    //     return true;
    // }
    // if (page_info == 'play' && get_pause_state() == true && key == 'c') {
    //     return true;
    // }
    // if (page_info == 'play' && get_pause_state() == true && key == 'e') {
    //     return true;
    // }
    if (page_info == 'end' && key == 'r') {
        return true;
    }
    if (page_info == 'end' && key == 'e') {
        return true;
    }
    return false;
}

function change_global_info(key) {
    const page_info = get_page_info()
    if (page_info == 'start' && key == ' ') {
        set_page_info('select');
        return true;
    }
    if (page_info == 'select' && key == ' ') {
        set_page_info('play');
        set_pause_state(false);
        return true;
    }
    if (page_info == 'play' && get_pause_state() == false && key == 'e') {
        set_level(1);
        set_pause_state(true);
        return false;
    }
    // if (page_info == 'play' && get_pause_state() == true && key == 'r') {
    //     set_pause_state(false);
    //     return true;
    // }
    // if (page_info == 'play' && get_pause_state() == true && key == 'c') {
    //     set_pause_state(false);
    //     return false;
    // }
    // if (page_info == 'play' && get_pause_state() == true && key == 'e') {
    //     set_page_info('select');
    //     set_pause_state(false);
    //     return true;
    // }
    if (page_info == 'end' && key == 'r') {
        set_pause_state(false);
        set_page_info('play');
        return true;
    }
    if (page_info == 'end' && key == 'e') {
        set_pause_state(false);
        set_page_info('select');
        return true;
    }
    return false;
}

export {check_page_change, change_global_info};