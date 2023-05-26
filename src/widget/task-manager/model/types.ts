export interface IStep {
  index: number;
  code: string;
  options: {
    value: string;
    label: string;
  }[];
  correctValue: string;
}

interface IAnswerOption {
  label: string;
  value: number;
}

interface IHint {
  description: string;
  theory: string;
}

interface IStage {
  id: number;
  code: string;
  hints?: IHint;
  correctValue?: number;
  answerOptions?: IAnswerOption[];
}

export interface ITask {
  id: number;
  title: string;
  generalHint: string;
  solutionDescription: string;
  stages: IStage[];
}
