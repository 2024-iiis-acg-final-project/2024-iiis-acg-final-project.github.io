import { get_page_info, set_page_info, get_level, set_level, get_pause_state, set_pause_state } from "./global.js";

function check_page_change(key) {
    const page_info = get_page_info()
    if (page_info == 'start' && key == ' ') {
        return true;
    }
    if (page_info == 'select' && key == ' ') {
        return true;
    }
    if (page_info == 'play' && get_pause_state() == false && key == 'Escape') {
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
    if (page_info == 'play' && get_pause_state() == false && key == 'Escape') {
        set_pause_state(true);
        return false;
    }
    return false;
}

export {check_page_change, change_global_info};