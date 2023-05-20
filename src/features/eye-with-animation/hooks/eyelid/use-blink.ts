import {DYNAMIC_ANIMATION} from 'features/eye-with-animation/constants';
import {Ref, useAnimateFaceElements} from 'shared/hooks';

const upperEyelidTranslateY = '-110px';
const lowerEyelidTranslateY = '110px';

export const useBlink = (
    isPlaying: boolean,
    upperEyelid: Ref,
    lowerEyelid: Ref
) => {
    useAnimateFaceElements(isPlaying, upperEyelid, lowerEyelid, {
        timeLine: {
            ...DYNAMIC_ANIMATION.timeLine,
        },
        to: {
            second: {
                translateY: upperEyelidTranslateY,
                ...DYNAMIC_ANIMATION.to,
            },
            first: {
                translateY: lowerEyelidTranslateY,
                ...DYNAMIC_ANIMATION.to,
            },
        },
    });
};
