import {Box} from '@mui/material';
import {SpeechBox} from 'features/speech-box';
import {FC} from 'react';
import {VirtualAssistant} from 'widget/virtual-assistant';

interface Props {
    message: string;
    title: string;
}

export const AssistantWithSpeech: FC<Props> = (restProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100px',
                gap: '12px',
                marginLeft: '100px',
                justifyContent: 'center',
            }}
        >
            <Box sx={{width: '348px', translate: '-70px -150px'}}>
                <VirtualAssistant />
            </Box>
            <Box
                sx={{
                    translate: '-52px -40px',
                    height: '290px',
                    width: '400px',
                    boxShadow: '0px 0px 0px 1px #e0e0e0',
                    borderRadius: '10px',
                }}
            >
                <SpeechBox {...restProps} />
            </Box>
        </Box>
    );
};
