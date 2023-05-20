import {FC} from 'react';
import {Box, Paper, Typography} from '@mui/material';

export const SpeechBubble: FC<{text: string}> = ({text}) => {
    return (
        <Box
            sx={{
                scale: '0.8',
                position: 'absolute',
                translate: '-10px -100px',
            }}
        >
            <Box
                sx={{
                    width: 180,
                    height: 120,
                    borderRadius: '50%',
                    border: '1px solid grey',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    translate: '30px 50px',
                    backgroundColor: 'white',
                    zIndex: '2',
                    position: 'relative',
                }}
            >
                <Typography>{text}</Typography>
            </Box>
            <Box
                sx={{
                    width: 120,
                    height: 80,
                    borderRadius: '50%',
                    border: '1px solid grey',
                    translate: '10px 20px',
                    backgroundColor: 'white',
                }}
            />
            <Box
                sx={{
                    width: 60,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid grey',
                }}
            />
        </Box>
    );
};

export default SpeechBubble;
