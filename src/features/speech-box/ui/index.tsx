import {Box, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
    title: string;
    message: string;
}

export const SpeechBox: FC<Props> = ({title, message}) => {
    return (
        <Box
            component={'div'}
            sx={{height: '100px', width: '250px', padding: '24px'}}
        >
            <Typography
                variant='h1'
                component={'h1'}
                sx={{fontSize: '16px', fontStyle: 'oblique'}}
            >
                {title}
            </Typography>
            <Typography
                variant='body1'
                component={'p'}
                sx={{fontSize: '16px', marginTop: '16px'}}
            >
                {message}
            </Typography>
        </Box>
    );
};
