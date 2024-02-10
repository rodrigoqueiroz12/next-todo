'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useTasks } from '@/@context/tasks-context'

import CreateTaskForm from './create-task-form'
import NoTasksFeedback from './no-tasks-feedback'
import TaskCard from './task-card'
import TasksHeader from './tasks-header'

export default function TasksSection() {
  const { tasks } = useTasks()
  const [parent] = useAutoAnimate()

  return (
    <section className="z-10 mx-auto w-full max-w-3xl">
      <CreateTaskForm />

      <div ref={parent} className="mt-16 space-y-6">
        <TasksHeader />

        {tasks.length === 0 ? (
          <NoTasksFeedback />
        ) : (
          <div ref={parent} className="space-y-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
