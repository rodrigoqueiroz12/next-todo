'use client'

import { useTasks } from '@/@context/tasks-context'

export default function TasksHeader() {
  const { tasks, finishedTasks } = useTasks()

  return (
    <div className="flex items-center justify-between">
      <div className="inline-flex items-center text-sm font-bold text-blue-regular">
        Tarefas criadas{' '}
        <span className="ml-2 rounded-full bg-gray-400 px-2 py-[2px] font-mono text-xs text-gray-200">
          {tasks.length}
        </span>
      </div>
      <div className="inline-flex items-center text-sm font-bold text-purple-regular">
        Concluídas{' '}
        <span className="ml-2 rounded-full bg-gray-400 px-2 py-[2px] font-mono text-xs text-gray-200">
          {finishedTasks}
        </span>
      </div>
    </div>
  )
}
