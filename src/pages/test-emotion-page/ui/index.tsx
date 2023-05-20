import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import {Emotions} from 'features/mouth-with-animation';
import {SpeechBubble} from 'features/speach-bubble';
import {VirtualAssistant} from 'widget/virtual-assistant';
import {
    useAssistantActions,
    useAssistantState,
} from 'widget/virtual-assistant/model';

export const TestAnimationPage = () => {
    const {setMouthEmotion, setEyesEmotion} = useAssistantActions();
    const {mouthEmotion, eyesEmotion} = useAssistantState();

    console.log(eyesEmotion);

    return (
        <Box
            sx={{
                border: '1px dashed  rgba(25, 118, 210, 0.5)',
                padding: '20px',
                height: '80%',
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                    Mouth emotion
                </InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={mouthEmotion}
                    label='Mouth emotion'
                    onChange={(e) =>
                        setMouthEmotion(e.target.value as Emotions)
                    }
                >
                    <MenuItem value={'speak'}>Speak</MenuItem>
                    <MenuItem value={'natural'}>Natural</MenuItem>
                    <MenuItem value={'happy'}>Happy</MenuItem>
                    <MenuItem value={'sad'}>Sad</MenuItem>
                </Select>
            </FormControl>
            <Box>
                {/* <SpeechBubble text='Hey' /> */}
                <VirtualAssistant />
            </Box>
            <Button
                onClick={() => {
                    setEyesEmotion({
                        behaviorEyelid: 'blink',
                    });

                    // setTimeout(
                    //     () =>
                    //         setEyesEmotion({
                    //             behaviorEyelid: 'natural',
                    //         }),
                    //     500
                    // );
                }}
                variant='outlined'
                sx={{width: '200px'}}
            >
                Blink
            </Button>
            <Button href='/' variant='contained' sx={{width: '200px'}}>
                Back
            </Button>
        </Box>
    );
};
