import {Ref, useAnimateFaceElements} from 'shared/hooks';
import {DYNAMIC_ANIMATION, STATIC_ANIMATION} from '../constants';
import {useEffect, useState} from 'react';

const upperLipNatural = 'M0,25 C25,20 75,20 100,25';
const lowerLipNatural = 'M0,25 C25,30 75,30 100,25';

const upperLipSpeak = 'M0,25 C25,40 75,40 100,25';
const lowerLipSpeak = 'M0,25 C25,10 75,10 100,25';

export const useSpeak = (
    isPlaying: boolean,
    upperLipRef: Ref,
    lowerLipRef: Ref
) => {
    const [isSpeakAnimationPlayed, setIsSpeakAnimationPlayed] =
        useState(isPlaying);

    useEffect(() => {
        if (isSpeakAnimationPlayed && !isPlaying) {
            setIsSpeakAnimationPlayed(false);
        }
    }, [isPlaying, isSpeakAnimationPlayed]);

    const isPlayingNatural = !isSpeakAnimationPlayed && isPlaying;
    const isPlayingSpeak = isSpeakAnimationPlayed && isPlaying;

    useAnimateFaceElements(isPlayingNatural, upperLipRef, lowerLipRef, {
        timeLine: {
            ...STATIC_ANIMATION.timeLine,
            onComplete: () => {
                setIsSpeakAnimationPlayed(true);
            },
        },
        to: {
            second: {
                attr: {d: lowerLipNatural},
                ...DYNAMIC_ANIMATION.to,
            },
            first: {
                attr: {d: upperLipNatural},
                ...DYNAMIC_ANIMATION.to,
            },
        },
    });

    useAnimateFaceElements(isPlayingSpeak, upperLipRef, lowerLipRef, {
        timeLine: DYNAMIC_ANIMATION.timeLine,
        to: {
            second: {
                attr: {d: upperLipSpeak},
                ...DYNAMIC_ANIMATION.to,
            },
            first: {
                attr: {d: lowerLipSpeak},
                ...DYNAMIC_ANIMATION.to,
            },
        },
    });
};
