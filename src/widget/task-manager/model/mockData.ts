import { ITask } from "./types";

const fibonacciTask = {
  id: 1,
  title: "Фибоначчиева последовательность",
  generalHint: 'В этой задаче вы должны реализовать функцию для вычисления n-го числа в последовательности Фибоначчи. Напомним, что каждое число в этой последовательности равно сумме двух предыдущих чисел, начиная с 0 и 1. Помните, что в Python для выполнения повторяющихся действий используются циклы.',
  solutionDescription: 'Для решения этой задачи мы создадим функцию, которая принимает в качестве аргумента номер числа в последовательности Фибоначчи, которое мы хотим вычислить. Мы инициализируем первые два числа последовательности, 0 и 1, и затем используем цикл, в котором каждое следующее число вычисляется как сумма двух предыдущих.',
  stages: [
    {
      id: 1,
      code: '',
      hints:
        {
          description: 'Начните с определения функции с одним параметром n.',
          theory: 'Функции в Python объявляются с помощью ключевого слова def.'
        },
      correctValue: 3,
      answerOptions: [
        { label: 'fibonacci(n):', value: 2 },
        { label: 'function fibonacci(n):', value: 4 },
        { label: 'def fibonacci(n):', value: 3 },
        { label: 'def fibonacci(n, b):', value: 5 },
        { label: 'define fibonacci(n, b):', value: 1 },
      ],
    },
    {
      id: 2,
      code: `def fibonacci(n):`,
      hints:
        {
          description: 'Инициализируйте список sequence двумя первыми числами последовательности Фибоначчи, то есть [0, 1]',
          theory: 'В Python списки это упорядоченные коллекции. Для инициализации списка используйте квадратные скобки []'
        },
      correctValue: 4,
      answerOptions: [
        { label: 'sequence = [0, 1]', value: 4 },
        { label: 'sequence = 0, 1', value: 2 },
        { label: 'sequence = [0, 1, 2]', value: 1 },
        { label: 'sequence = []', value: 3 },
      ],
    },
    {
      id: 3,
      code: `
      def fibonacci(n):
        sequence = [0, 1]`,
      hints: 
        {
          description: 'Генерация последовательности: Сгенерируйте последовательность Фибоначчи, используя цикл while, который выполняется до тех пор, пока длина sequence меньше n. В каждой итерации вычислите следующее число как сумму двух предыдущих и добавьте его в список.',
          theory: 'Используйте цикл while для генерации последовательности Фибоначчи. С помощью индексов -1 и -2 вы можете обратиться к последним двум элементам списка'
        },
      correctValue: 4,
      answerOptions: [
        { label: 'while len(sequence) < n: sequence.append(sequence[-1] + sequence[-2])', value: 4 },
        { label: 'for _ in range(2, n): sequence.append(sequence[-1] + sequence[-2])', value: 2 },
        { label: 'for _ in range(n): sequence.append(sequence[-1] + sequence[-2])', value: 1 },
        { label: 'while len(sequence) < n: sequence.append(sequence[0] + sequence[1])', value: 3 },
      ],
    },
    {
      id: 4,
      code: `
      def fibonacci(n):
        sequence = [0, 1]
        while len(sequence) < n:
          next_value = sequence[-1] + sequence[-2]
          sequence.append(next_value)
      `,
      hints:
        {
          description: 'Возврат последовательности: Верните список sequence как результат функции.',
          theory: 'Функция в Python возвращает значение с помощью ключевого слова return.'
        },
      correctValue: 4,
      answerOptions: [
        { label: 'return sequence', value: 4 },
        { label: 'print(sequence)', value: 2 },
        { label: 'return n', value: 1 },
        { label: 'return sequence[n]', value: 3 },
      ],
    },
    {
      id: 4,
      code: `
      def fibonacci(n):
        sequence = [0, 1]
        while len(sequence) < n:
          next_value = sequence[-1] + sequence[-2]
          sequence.append(next_value)
        return sequence
      `,
    },
  ],
}

export const tasks: ITask[] = [
  fibonacciTask, fibonacciTask, fibonacciTask, fibonacciTask, fibonacciTask
];
