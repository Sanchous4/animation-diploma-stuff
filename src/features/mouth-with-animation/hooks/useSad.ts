import {Ref, useAnimateFaceElements} from 'shared/hooks';
import {STATIC_ANIMATION} from '../constants';

const lowerLipSad = 'M0,25 C25,30 75,30 100,25';
const upperLipSad = 'M0,25 C25,0 75,0 100,25';

export const useSad = (
    isPlaying: boolean,
    upperLipRef: Ref,
    lowerLipRef: Ref
) => {
    useAnimateFaceElements(isPlaying, upperLipRef, lowerLipRef, {
        timeLine: STATIC_ANIMATION.timeLine,
        to: {
            second: {
                attr: {d: lowerLipSad},
                ...STATIC_ANIMATION.to,
            },
            first: {
                attr: {d: upperLipSad},
                ...STATIC_ANIMATION.to,
            },
        },
    });
};
