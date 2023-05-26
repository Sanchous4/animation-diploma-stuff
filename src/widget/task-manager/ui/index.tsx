import {useState, useEffect} from 'react';
import {Box, styled} from '@mui/material';
import {TaskCodeBlock} from 'features/task-code-block';
import {TaskAnswerList} from 'features/task-answer-list/ui';
import {AssistantWithSpeech} from 'widget/assistant-with-speech';
import { getText } from '../lib/getText';
import { tasks } from '../model/mockData';

const Root = styled(Box)`
    display: flex;
    justify-content: center;
    min-width: 1000px;
    margin-top: 170px;
`;

interface IStep {
    index: number;
    code: string;
    options: {
        value: string;
        label: string;
    }[];
    correctValue: string;
}

const pythonCode0 = `
n = int(input())
 
factorial = 1
`;

const options0 = [
    {value: '1', label: 'for i in range(2, n+2) '},
    {value: '2', label: 'for i in range(2, n+1) '},
    {value: '3', label: 'for i in range(2, n-1) '},
    {value: '4', label: 'for i in range(0, n+1) '},
];

const pythonCode1 = `
n = int(input())
 
factorial = 1
 
for i in range(2, n+1):
`;

const options1 = [
    {value: '1', label: 'factorial += i '},
    {value: '2', label: 'factorial *= i '},
    {value: '3', label: 'factorial -= i '},
    {value: '4', label: 'factorial = i '},
];

const pythonCode2 = `
n = int(input())
 
factorial = 1
 
for i in range(2, n+1):
    factorial *= i
 
print(factorial)
`;

const TaskExample: IStep[] = [
    {
        index: 0,
        code: pythonCode0,
        options: options0,
        correctValue: '2',
    },
    {
        index: 1,
        code: pythonCode1,
        options: options1,
        correctValue: '1',
    },
    {
        index: 2,
        code: pythonCode2,
        options: [],
        correctValue: '',
    },
];

export const TaskManager = () => {
    const [currentStep, setStep] = useState(0);
    const [currentTask, setTask] = useState(0);

    const [strategyIndex, setStrategyIndex] = useState(-1);


    useEffect(() => {
      setStrategyIndex(Math.floor(Math.random() * 6))
    }, [])

    const [currentText, setText] = useState('');

    const [isWrongStep, setIsWrongStep] = useState(false);
    const [isTaskFinished, setTaskFinished] = useState(false);
    return (
        <Box sx={{translate: '0px 25px'}}>
            <AssistantWithSpeech
                title='Все верно'
                message={currentText}
            />
            <Root>
                <TaskCodeBlock
                    code={tasks[currentTask].stages[currentStep].code}
                    sx={{marginRight: '12px'}}
                />
                <TaskAnswerList
                    options={tasks[currentTask].stages[currentStep].answerOptions ? tasks[currentTask].stages[currentStep].answerOptions as [] : []}
                    correctValue={tasks[0].stages[currentStep].correctValue}
                    isWrongStep={isWrongStep}
                    isTaskFinished={isTaskFinished}
                    completeCallback={(_value, isCorrect) => {
                        if (isCorrect) {
                            setIsWrongStep(false);
                            if (currentStep + 1 === tasks[currentTask].stages.length - 1) {
                                setTaskFinished(true);
                            }
                            else {
                              setText(getText(false, strategyIndex, currentTask, currentStep + 1 ) || '')
                            }
                              setStep((currentStep) => currentStep + 1);
                        } else {
                            setText(getText(false, strategyIndex, currentTask, currentStep) || '')
                            setIsWrongStep(true);
                        }
                    }}
                    againCallback={() => {
                        setIsWrongStep(false);
                    }}
                    nextCallback={() => {
                        setIsWrongStep(false);
                        setTaskFinished(false);
                        setStep(0);
                        setTask((currentTask) => currentTask + 1);
                    }}
                />
            </Root>
        </Box>
    );
};
