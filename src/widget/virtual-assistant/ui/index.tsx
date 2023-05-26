import {MouthWithAnimation} from 'features/mouth-with-animation';
import {useAssistantState} from '../model';
import {SurprisedEyes} from 'features/eye-with-animation';
import {Box} from '@mui/material';
import {axiosGet} from '../lib';

const currentImg = axiosGet();

export const VirtualAssistant = () => {
    const {mouthEmotion, eyesEmotion} = useAssistantState();

    return (
        <Box
            sx={{
                scale: '0.6',
                backgroundImage: `url(${currentImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px',
                width: '500px',
            }}
        >
            <SurprisedEyes
                emotionPupil={eyesEmotion.behaviorPupil}
                behaviorEyelid={eyesEmotion.behaviorEyelid}
            />
            <MouthWithAnimation emotion={mouthEmotion} />
        </Box>
    );
};
