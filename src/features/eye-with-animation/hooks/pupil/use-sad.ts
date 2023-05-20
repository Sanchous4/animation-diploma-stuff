import {Ref} from 'shared/hooks';

// useEffect(() => {
//     const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 1});
//     tl.to([leftEyeRef.current, rightEyeRef.current], {
//         duration: 0.1,
//         attr: {r: 0},
//     });
// }, []);

export const useSad = (
    isPlaying: boolean,
    leftPupil: Ref,
    rightPupil: Ref
) => {};
