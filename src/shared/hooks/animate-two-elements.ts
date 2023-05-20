import {gsap} from 'gsap';
import {RefObject, useEffect} from 'react';

interface GASPConfig {
    timeLine: gsap.TimelineVars;
    to: {
        first: gsap.TweenVars;
        second: gsap.TweenVars;
    };
}

export type Ref = RefObject<SVGPathElement>;

export const useAnimateFaceElements = (
    isPlaying: boolean,
    firstElement: Ref,
    secondElement: Ref,
    config: GASPConfig
) => {
    useEffect(() => {
        if (!isPlaying || !firstElement || !secondElement) {
            return;
        }

        const upperLipTimeline = gsap.timeline(config.timeLine);
        const lowerLipTimeline = gsap.timeline(config.timeLine);

        upperLipTimeline.to(firstElement.current, config.to.first);
        lowerLipTimeline.to(secondElement.current, config.to.second);
        return () => {
            upperLipTimeline.kill();
            lowerLipTimeline.kill();
        };
    }, [isPlaying]);
};
