import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, styled } from '@mui/material';

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-shadow: 0px 0px 0px 1px #e0e0e0;
  border-radius: 10px;
  max-height: 300px;
  min-width: 250px;
  max-width: 300px;

  overflow: auto;
`;

interface IOption {
  value: string;
  label: string;
}

interface ITaskAnswerList {
  options: IOption[];
  correctValue?: string;
  isCompleted: boolean;
  completeCallback(currentValue: string, isCorrect: boolean): void;
  againCallback(): void;
  nextCallback(): void;


  isLastStepCorrect: boolean;
  [key: string]: any;
}

export function TaskAnswerList({
  options,
  correctValue,
  isCompleted,
  completeCallback,
  isLastStepCorrect,
  againCallback,
  nextCallback,
  ...others
}: ITaskAnswerList) {
  const [selectedIndex, setSelectedIndex] = React.useState('');

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    if (!isCompleted) {
      setSelectedIndex(index);
    }
  };

  const handleApplyButtonClick = () => {
    completeCallback(selectedIndex, correctValue === selectedIndex);
  };

  const handleAgainButtonClick = () => {
    setSelectedIndex('')
    againCallback()
  };

  const handlenextButtonClick = () => {
    setSelectedIndex('')
    nextCallback()
  };

  const buttonClickAction = () => {
    !isCompleted
          ? handleApplyButtonClick()
          : isLastStepCorrect
          ? handlenextButtonClick()
          : handleAgainButtonClick()
  }

  const setColor = (value: string) => {
    console.log(selectedIndex !== value || !isCompleted);

    return selectedIndex !== value || !isCompleted
      ? 'inital'
      : correctValue === value
      ? '#66BB6A80 !important'
      : '#F4433680 !important';
  };

  return (
    <Root {...others}>
      <List component='nav' aria-label='main mailbox folders'>
        {options.map((option) => {
          return (
            <ListItemButton
              key={option.value}
              sx={{
                backgroundColor: setColor(option.value),
              }}
              selected={selectedIndex === option.value}
              onClick={(event) => handleListItemClick(event, option.value)}
            >
              <ListItemText primary={option.label} />
            </ListItemButton>
          );
        })}
      </List>
      <Button onClick={buttonClickAction}>
        {!isCompleted
          ? 'Применить'
          : isLastStepCorrect
          ? 'Продолжить'
          : 'Еще раз'}
      </Button>
    </Root>
  );
}
