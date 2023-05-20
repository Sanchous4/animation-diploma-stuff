import {Ref} from 'shared/hooks';
import {useSpeak} from './useSpeak';
import {useNatural} from './useNatural';
import {useHappy} from './useHappy';
import {useSad} from './useSad';

export type Emotions = 'speak' | 'natural' | 'happy' | 'sad';

export const useAnimateMountWithEmotions = (
    upperLipRef: Ref,
    lowerLipRef: Ref,
    emotion: Emotions = 'natural'
) => {
    useSpeak(emotion === 'speak', upperLipRef, lowerLipRef);
    useNatural(emotion === 'natural', upperLipRef, lowerLipRef);
    useHappy(emotion === 'happy', upperLipRef, lowerLipRef);
    useSad(emotion === 'sad', upperLipRef, lowerLipRef);
};
