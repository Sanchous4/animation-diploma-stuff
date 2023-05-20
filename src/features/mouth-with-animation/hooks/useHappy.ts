import {Ref, useAnimateFaceElements} from 'shared/hooks';
import {STATIC_ANIMATION} from '../constants';

const upperLipHappy = 'M0,25 C50,25 50,25 100,25';
const lowerLipHappy = 'M0,25 C25,55 75,55 100,25';

export const useHappy = (
    isPlaying: boolean,
    upperLipRef: Ref,
    lowerLipRef: Ref
) => {
    useAnimateFaceElements(isPlaying, upperLipRef, lowerLipRef, {
        timeLine: STATIC_ANIMATION.timeLine,
        to: {
            second: {
                attr: {d: lowerLipHappy},
                ...STATIC_ANIMATION.to,
            },
            first: {
                attr: {d: upperLipHappy},
                ...STATIC_ANIMATION.to,
            },
        },
    });
};
