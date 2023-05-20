import {Box, Button} from '@mui/material';
import {FC} from 'react';
import {ChevronRightIcon} from '@heroicons/react/20/solid';

export interface SubButtonsProps {
    buttons: {name: string; to: string}[];
}

export const SubButtons: FC<SubButtonsProps> = ({buttons}) => {
    return (
        <Box component='div' display='flex' gap={'20px'}>
            {buttons.map((button) => (
                <Button
                    key={button.name}
                    size='medium'
                    href={button.to}
                    variant='outlined'
                    endIcon={<ChevronRightIcon width={15} />}
                >
                    {button.name}
                </Button>
            ))}
        </Box>
    );
};
