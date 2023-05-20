import {Ref, useAnimateFaceElements} from 'shared/hooks';
import {STATIC_ANIMATION} from '../constants';

const upperLipNatural = 'M0,25 C25,20 75,20 100,25';
const lowerLipNatural = 'M0,25 C25,30 75,30 100,25';

export const useNatural = (
    isPlaying: boolean,
    upperLipRef: Ref,
    lowerLipRef: Ref
) => {
    useAnimateFaceElements(isPlaying, upperLipRef, lowerLipRef, {
        timeLine: {
            ...STATIC_ANIMATION.timeLine,
        },
        to: {
            second: {
                attr: {d: lowerLipNatural},
                ...STATIC_ANIMATION.to,
            },
            first: {
                attr: {d: upperLipNatural},
                ...STATIC_ANIMATION.to,
            },
        },
    });
};
