import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    in({from, to, done}){
        const tl = new TimelineLite();
        tl.fromTo(from, 0.5, {opacity:1}, {opacity:0});
        tl.fromTo(to, 0.5, {opacity:0}, {opacity:1, onComplete: endAnim},1);

        function endAnim(){
                done();
                from.remove();
        };
    };
    out({from, done}){
        done();
    };

}

export default Fade;
