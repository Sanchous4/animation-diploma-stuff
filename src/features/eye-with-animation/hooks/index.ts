import {Ref} from 'shared/hooks';
import {useBlink} from './eyelid';
import {useSad} from './pupil';

export type BehaviorPupil = 'sad' | '';
export type BehaviorEyelid = 'blink' | 'natural' | '';
export const useAnimateEyesWithEmotions = (
    upperEyelid: Ref,
    lowerEyelid: Ref,
    emotionEyelid: BehaviorEyelid = '',
    leftPupil: Ref,
    rightPupil: Ref,
    emotionPupil: BehaviorPupil = ''
) => {
    useBlink(emotionEyelid === 'blink', upperEyelid, lowerEyelid);
    useSad(emotionPupil === 'sad', leftPupil, rightPupil);
};
