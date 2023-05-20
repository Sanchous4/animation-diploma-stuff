import {Box} from '@mui/material';
import {FC, useRef} from 'react';
import {
    BehaviorEyelid,
    BehaviorPupil,
    useAnimateEyesWithEmotions,
} from '../hooks';

interface Props {
    behaviorEyelid: BehaviorEyelid;
    emotionPupil: BehaviorPupil;
}

export const SurprisedEyes: FC<Props> = ({behaviorEyelid, emotionPupil}) => {
    const upperEyelid = useRef(null);
    const lowerEyelid = useRef(null);

    const leftPupil = useRef(null);
    const rightPupil = useRef(null);

    useAnimateEyesWithEmotions(
        upperEyelid,
        lowerEyelid,
        behaviorEyelid,
        leftPupil,
        rightPupil,
        emotionPupil
    );

    return (
        <Box
            sx={{
                paddingTop: '165px',
                paddingLeft: '174px',
            }}
        >
            <Box
                sx={{
                    borderRadius: '100px',
                    overflow: 'hidden',
                    width: '152px',
                    height: '60px',
                }}
            >
                <Box
                    ref={upperEyelid}
                    bgcolor={'#ecb88a'}
                    height={'110px'}
                    marginTop={'-110px'}
                    width={'100%'}
                />
                <Box
                    sx={{
                        backgroundColor: '#ecb88a',
                        height: '60px',
                    }}
                >
                    <svg width='200px' viewBox='18 0 100 50'>
                        <g
                            xmlns='http://www.w3.org/2000/svg'
                            id='Eyes/Surprised-😳'
                            transform='translate(0.000000, 8.000000)'
                        >
                            <circle
                                id='The-White-Stuff'
                                fill='#FFFFFF'
                                cx='32'
                                cy='7'
                                r='14'
                            />
                            <circle
                                id='Eye-Ball'
                                fill='#FFFFFF'
                                cx='80'
                                cy='7'
                                r='14'
                            />
                            <circle
                                id='Eye'
                                fillOpacity='0.699999988'
                                fill='#000000'
                                cx='32'
                                cy='7'
                                r='6'
                            />
                            <circle
                                id='Eye'
                                fillOpacity='0.699999988'
                                fill='#000000'
                                cx='80'
                                cy='7'
                                r='6'
                            />
                        </g>
                    </svg>
                </Box>
                <Box
                    ref={lowerEyelid}
                    bgcolor={'#ecb88a'}
                    height={'110px'}
                    width={'100%'}
                />
            </Box>
        </Box>
    );
};
