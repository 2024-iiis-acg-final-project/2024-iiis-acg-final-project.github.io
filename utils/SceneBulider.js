import { get_page_info, set_page_info, get_level, set_level, get_pause_state, set_pause_state } from "./global";
import { StartScene, EndScene, SelectScene, PlayScene } from '../scenes';
import { SpotLight } from "three";

function build_new_scene() {
    const page_info = get_page_info()
    if (page_info == 'start') {
        return new StartScene();
    }
    if (page_info == 'end') {
        return new EndScene();
    }
    if (page_info == 'play') {
        return new PlayScene(get_level());
    }
    if (page_info == 'select') {
        return new SelectScene();
    }
}

export {build_new_scene};