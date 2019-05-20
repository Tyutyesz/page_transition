import {TimelineMax} from "gsap/TimelineMax";
import Highway from '@dogstudio/highway';
import Fade from "./transition";


let Core = {
    "init":function () {
        Core.highways();
    },
    "highways":function(){
        const h = new Highway.Core({
            transitions: {
                default: Fade
            }
        })

    }

};


export default Core;
