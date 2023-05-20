import {FC, SVGProps, useRef} from 'react';
import {Emotions, useAnimateMountWithEmotions} from '../hooks';
import {Box} from '@mui/material';

export interface MouthWithAnimationProps extends SVGProps<SVGSVGElement> {
    emotion: Emotions;
}

export const MouthWithAnimation: FC<MouthWithAnimationProps> = ({
    emotion,
    ...restProps
}) => {
    const upperLipRef = useRef<SVGPathElement>(null);
    const lowerLipRef = useRef<SVGPathElement>(null);

    useAnimateMountWithEmotions(upperLipRef, lowerLipRef, emotion);

    return (
        <Box
            sx={{
                marginLeft: '150px',
                marginTop: '20px',
                scale: '0.6',
            }}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 100 50'
                width='100'
                {...restProps}
            >
                <path
                    id='upper-lip'
                    d='M0,25 C25,20 75,20 100,25'
                    fill='#473628'
                    stroke='#473628'
                    ref={upperLipRef}
                />
                <path
                    id='lower-lip'
                    d='M0,25 C25,30 75,30 100,25'
                    fill='#473628'
                    stroke='#473628'
                    ref={lowerLipRef}
                />
            </svg>
        </Box>
    );
};
