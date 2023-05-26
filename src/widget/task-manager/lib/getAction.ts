export enum AgentActions {
  GIVE_TASK_HINT,
  GIVE_THEORY_HINT_DURING_TASK,
  DO_NOTHING,
  GIVE_TASK_WITH_SOLUTION,
  GIVE_TASK_WITH_HINT,
  GIVE_TASK_WITHOUT_HINTS,
}

const strategyStages1 = [
  AgentActions.GIVE_TASK_HINT,
  AgentActions.GIVE_TASK_HINT,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
]

const strategyStages2 = [
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_TASK_HINT,
  AgentActions.GIVE_TASK_HINT,
  AgentActions.DO_NOTHING,
]

const strategyStages3 = [
  AgentActions.GIVE_TASK_HINT,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
]

const strategyStages4 = [
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_TASK_HINT,
]

const strategyStages5 = [
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_HINT,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
]

const strategyStages6 = [
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
  AgentActions.DO_NOTHING,
]

const strategyTasks1 = [
  AgentActions.GIVE_TASK_WITH_SOLUTION,
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
]

const strategyTasks2 = [
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.GIVE_TASK_WITH_SOLUTION,
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_WITH_HINT,
]

const strategyTasks3 = [
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_TASK_WITH_SOLUTION,
]

const strategyTasks4 = [
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
  AgentActions.GIVE_TASK_WITH_SOLUTION,
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
]

const strategyTasks5 = [
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_WITH_SOLUTION,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
]

const strategyTasks6 = [
  AgentActions.GIVE_THEORY_HINT_DURING_TASK,
  AgentActions.GIVE_TASK_WITH_HINT,
  AgentActions.DO_NOTHING,
  AgentActions.GIVE_TASK_WITH_SOLUTION,
  AgentActions.GIVE_TASK_WITHOUT_HINTS,
]

const strategyStages = [strategyStages1, strategyStages2, strategyStages3, strategyStages4, strategyStages5, strategyStages6]

const strategyTasks = [strategyTasks1, strategyTasks2, strategyTasks3, strategyTasks4, strategyTasks5, strategyTasks6]

export function getActionStage(strategyIndex: number, stageIndex: number) {
  return strategyStages[strategyIndex][stageIndex]
}

export function getActionTask(strategyIndex: number, taskIndex: number) {
  return strategyTasks[strategyIndex][taskIndex]
}

