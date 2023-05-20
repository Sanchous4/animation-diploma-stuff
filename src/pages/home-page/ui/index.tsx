import {Box, Button} from '@mui/material';
import {SubButtonsProps, SubButtons} from 'shared/ui';

const buttons: SubButtonsProps['buttons'] = [
    {name: 'Test animation', to: 'test-animation'},
    {name: 'Test generation', to: 'test'},
];

export const HomePage = () => {
    return (
        <Box
            component='div'
            display='flex'
            flexDirection='column'
            alignItems={'center'}
            gap={'20px'}
        >
            <Button
                href='test'
                variant='contained'
                sx={{
                    width: '200px',
                    height: '50px',
                    fontSize: '18px',
                }}
            >
                Start demo
            </Button>
            <SubButtons buttons={buttons} />
        </Box>
    );
};
