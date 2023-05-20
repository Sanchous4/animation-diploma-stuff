import {Power1} from 'gsap';

interface Animation {
    to: gsap.TweenVars;
    timeLine: gsap.TimelineVars;
}

export const STATIC_ANIMATION: Animation = {
    to: {
        duration: 30,
        ease: Power1.easeOut,
    },
    timeLine: {},
};

export const DYNAMIC_ANIMATION: Animation = {
    to: {
        duration: 30,
        ease: Power1.easeInOut,
    },
    timeLine: {repeat: 1, yoyo: true},
};
