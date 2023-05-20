import {FC} from 'react';
// import Mouth from './assets/mouth.svg';
// import styles from './animate-mouth.module.css';

// import './animate-mouth.css';
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

interface AnimateMouthProps {
    emotion?: string;
    isTalking?: boolean;
}

export const AnimateMouth: FC<AnimateMouthProps> = () => {
    const upperLipRef = useRef(null);
    const lowerLipRef = useRef(null);

    useEffect(() => {
        const upperLipTimeline = gsap.timeline({repeat: -1, yoyo: true});
        const lowerLipTimeline = gsap.timeline({repeat: -1, yoyo: true});

        upperLipTimeline.to(upperLipRef.current, {
            attr: {d: 'M0,25 C25,10 75,10 100,25'},
            duration: 0.15,
            ease: 'power1.inOut',
        });

        lowerLipTimeline.to(lowerLipRef.current, {
            attr: {d: 'M0,25 C25,40 75,40 100,25'},
            duration: 0.15,
            ease: 'power1.inOut',
        });
    }, []);

    return <></>;
};
