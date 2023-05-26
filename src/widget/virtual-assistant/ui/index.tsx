import {MouthWithAnimation} from 'features/mouth-with-animation';
import {useAssistantState} from '../model';
import {SurprisedEyes} from 'features/eye-with-animation';
import {Box} from '@mui/material';

const imageUrl =
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

const imageUrl2 =
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=none&eyebrowType=Default&mouthType=none&skinColor=Light';

export const VirtualAssistant = () => {
    const {mouthEmotion, eyesEmotion} = useAssistantState();

    return (
        <Box
            sx={{
                scale: '0.6',
                backgroundImage: `url(${imageUrl})`,
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
