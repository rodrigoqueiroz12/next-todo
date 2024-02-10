import { produce } from 'immer'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Task } from '@/@types/task'

interface TasksContextProps {
  tasks: Task[]
  finishedTasks: number
  createTask: (description: string) => void
  deleteTask: (id: string) => void
  toggleIsFinishedTask: (id: string) => void
}

interface TasksContextProviderProps {
  children: ReactNode
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  finishedTasks: 0,
  createTask: () => {},
  deleteTask: () => {},
  toggleIsFinishedTask: () => {},
})

export default function TasksContextProvider({
  children,
}: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  const finishedTasks = tasks.filter((task) => task.isFinished).length

  useEffect(() => {
    const newTasks = JSON.parse(localStorage.getItem('next-todo:tasks') || '[]')

    setTasks(newTasks)
  }, [])

  function createTask(description: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      isFinished: false,
      createdAt: new Date(),
    }

    setTasks([newTask, ...tasks])

    localStorage.setItem('next-todo:tasks', JSON.stringify([newTask, ...tasks]))
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)

    localStorage.setItem('next-todo:tasks', JSON.stringify(newTasks))
  }

  function toggleIsFinishedTask(id: string) {
    const newTasks = produce(tasks, (draft) => {
      const taskIndex = tasks.findIndex((task) => task.id === id)

      draft[taskIndex].isFinished = !draft[taskIndex].isFinished
    })

    setTasks(newTasks)

    localStorage.setItem('next-todo:tasks', JSON.stringify(newTasks))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        toggleIsFinishedTask,
        finishedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const tasksContext = useContext(TasksContext)

  return { ...tasksContext }
}
