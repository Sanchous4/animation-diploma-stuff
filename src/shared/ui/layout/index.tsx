import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
        >
            <Outlet />
        </Box>
    );
};
