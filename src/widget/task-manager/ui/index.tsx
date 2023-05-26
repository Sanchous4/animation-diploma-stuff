import {useState, useEffect} from 'react';
import {Box, styled} from '@mui/material';
import {TaskCodeBlock} from 'features/task-code-block';
import {TaskAnswerList} from 'features/task-answer-list/ui';
import {AssistantWithSpeech} from 'widget/assistant-with-speech';
import {getText} from '../lib/getText';
import {tasks} from '../model/mockData';
import {getActionStage} from '../lib/getAction';
import {useAnimateMountWithEmotions} from 'features/mouth-with-animation';
import {useAssistantState} from 'widget/virtual-assistant/model';
import {useAssistantActions} from 'widget/virtual-assistant/model';

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
        setStrategyIndex(Math.floor(Math.random() * 6));
    }, []);

    const [currentText, setText] = useState('');

    const [isWrongStep, setIsWrongStep] = useState(false);
    const [isTaskFinished, setTaskFinished] = useState(false);

    const {setMouthEmotion, setEyesEmotion} = useAssistantActions();
    const [title, setTitle] = useState(
        'Напишите функцию вычисления числа Фибоначи через while'
    );

    const [timeBlink, setTimeBlink] = useState(100);

    useEffect(() => {
        const time = setTimeout(() => {
            setEyesEmotion({
                behaviorEyelid: 'blink',
                behaviorPupil: '',
            });
            setTimeBlink(Math.floor((Math.random() + 1) * 10000));
        }, timeBlink);
    }, [timeBlink, setEyesEmotion]);

    return (
        <Box sx={{translate: '0px 25px'}}>
            <AssistantWithSpeech title={title} message={currentText} />
            <Root>
                <TaskCodeBlock
                    code={tasks[currentTask].stages[currentStep].code}
                    sx={{marginRight: '12px'}}
                />
                <TaskAnswerList
                    options={
                        tasks[currentTask].stages[currentStep].answerOptions
                            ? (tasks[currentTask].stages[currentStep]
                                  .answerOptions as [])
                            : []
                    }
                    correctValue={tasks[0].stages[currentStep].correctValue}
                    isWrongStep={isWrongStep}
                    isTaskFinished={isTaskFinished}
                    completeCallback={(_value, isCorrect) => {
                        if (isCorrect) {
                            setTitle('Новое задание');
                            setIsWrongStep(false);
                            setMouthEmotion('happy');
                            if (
                                currentStep + 1 ===
                                tasks[currentTask].stages.length - 1
                            ) {
                                setTaskFinished(true);
                            } else {
                                setMouthEmotion('speak');
                                setText(
                                    getText(
                                        false,
                                        strategyIndex,
                                        currentTask,
                                        currentStep + 1
                                    ) || ''
                                );
                                setTimeout(() => {
                                    setMouthEmotion('natural');
                                }, 1000);
                            }
                            setStep((currentStep) => currentStep + 1);
                        } else {
                            setTitle(
                                title === 'К сожалению ошибка'
                                    ? 'К сожалению ошибка'
                                    : 'Попробуйте снова'
                            );
                            setMouthEmotion('speak');
                            setText(
                                getText(
                                    false,
                                    strategyIndex,
                                    currentTask,
                                    currentStep
                                ) || ''
                            );
                            setIsWrongStep(true);
                            setTimeout(() => {
                                setMouthEmotion('sad');
                            }, 1000);

                            setTimeout(() => {
                                setMouthEmotion('natural');
                            }, 3000);
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
