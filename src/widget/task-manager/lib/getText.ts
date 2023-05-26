import { AgentActions } from "./getAction"
import { getActionStage, getActionTask } from "./getAction"
import { tasks } from "../model/mockData"

export const getText = (isNextTask : boolean, strategyIndex: number, taskIndex: number,  stageIndex: number) => {
  if (isNextTask) {
    const action: AgentActions  = getActionTask(strategyIndex, taskIndex)
    switch(action) {
      case AgentActions.GIVE_TASK_WITH_SOLUTION:
        return tasks[taskIndex].solutionDescription
      case AgentActions.GIVE_TASK_WITH_HINT:
        return tasks[taskIndex].generalHint
      case AgentActions.GIVE_TASK_WITHOUT_HINTS:
        return 'Пожалуйта, решите это задание'
      default:
        break;
    }
  }
  else {
    const action: AgentActions  = getActionStage(strategyIndex, stageIndex)
    switch(action) {
      case AgentActions.GIVE_TASK_HINT:
        return tasks[taskIndex].stages[stageIndex]?.hints?.description
      case AgentActions.GIVE_THEORY_HINT_DURING_TASK:
        return tasks[taskIndex].stages[stageIndex]?.hints?.theory
      case AgentActions.DO_NOTHING:
        return 'Пожалуйта, решите это задание'
      default:
        break;
    }
  }
}