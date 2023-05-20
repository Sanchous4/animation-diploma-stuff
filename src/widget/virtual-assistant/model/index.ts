import {BehaviorEyelid, BehaviorPupil} from 'features/eye-with-animation/hooks';
import {Emotions} from 'features/mouth-with-animation';
import {create} from 'zustand';
import {shallow} from 'zustand/shallow';

interface EyesEmotion {
    behaviorPupil: BehaviorPupil;
    behaviorEyelid: BehaviorEyelid;
}

export type SetEyesEmotion = (eyesEmotion: Partial<EyesEmotion>) => void;

interface AssistantState {
    state: {
        mouthEmotion: Emotions;
        eyesEmotion: EyesEmotion;
    };
    actions: {
        setMouthEmotion: (mouthEmotion: Emotions) => void;
        setEyesEmotion: SetEyesEmotion;
    };
}

const useAssistantStore = create<AssistantState>((set) => ({
    state: {
        mouthEmotion: 'natural',
        eyesEmotion: {
            behaviorEyelid: '',
            behaviorPupil: '',
        },
    },

    actions: {
        setMouthEmotion: (mouthEmotion) =>
            set(({state}) => {
                return {
                    state: {
                        ...state,
                        mouthEmotion,
                    },
                };
            }),

        setEyesEmotion(eyesEmotion) {
            set(({state}) => {
                return {
                    state: {
                        ...state,
                        eyesEmotion: {
                            behaviorEyelid:
                                eyesEmotion.behaviorEyelid ||
                                state.eyesEmotion.behaviorEyelid,
                            behaviorPupil:
                                eyesEmotion.behaviorPupil ||
                                state.eyesEmotion.behaviorPupil,
                        },
                    },
                };
            });
        },
    },
}));

export const useAssistantState = () =>
    useAssistantStore((state) => state.state, shallow);
export const useAssistantActions = () =>
    useAssistantStore((state) => state.actions);
