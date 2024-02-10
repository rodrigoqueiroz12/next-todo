'use client'

import { Check, Trash } from 'lucide-react'
import { toast } from 'sonner'

import { useTasks } from '@/@context/tasks-context'
import { Task } from '@/@types/task'

import AlertDialog from './alert-dialog'
import Tooltip from './tooltip'

interface TaskCardProps {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, toggleIsFinishedTask } = useTasks()

  function handleDeleteTask() {
    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve(null), 2000))

    toast.promise(promise, {
      loading: 'Carregando...',
      success: () => {
        deleteTask(task.id)

        return 'Tarefa removida com sucesso'
      },
    })
  }

  function handleToggleIsFinishedTask() {
    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve(null), 500))

    toast.promise(promise, {
      loading: 'Carregando...',
      success: () => {
        toggleIsFinishedTask(task.id)

        return 'Informação salva'
      },
    })
  }

  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4">
      <input
        type="checkbox"
        id={`input-${task.id}`}
        className="peer sr-only"
        checked={task.isFinished}
        onChange={handleToggleIsFinishedTask}
      />
      <Tooltip
        message={
          task.isFinished
            ? 'Marcar como não concluída'
            : 'Marcar como concluída'
        }
        trigger={
          <label
            htmlFor={`input-${task.id}`}
            className="relative flex size-5 min-w-5 cursor-pointer items-center justify-center rounded-full border-2 border-blue-regular leading-none text-transparent transition-colors hover:border-blue-dark hover:bg-blue-dark/20 peer-checked:border-purple-dark peer-checked:bg-purple-dark peer-checked:text-gray-100 peer-checked:hover:border-purple-regular peer-checked:hover:bg-purple-regular"
          >
            <Check className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2" />
          </label>
        }
      />

      <textarea
        defaultValue={task.description}
        readOnly
        className="w-full resize-none overflow-y-hidden bg-transparent text-sm leading-[1.4] text-gray-100 outline-none transition-colors read-only:cursor-default peer-checked:text-gray-300 peer-checked:line-through"
      />

      <AlertDialog
        title={<h6>Você tem certeza?</h6>}
        description={
          <p>
            Esta ação é irreversível. Você excluirá a tarefa permanentemente.
          </p>
        }
        cancel={
          <button
            type="button"
            className="rounded-lg border border-gray-400 bg-gray-500 px-4 py-2 text-sm font-bold text-gray-200 transition-colors hover:bg-gray-400"
          >
            Cancelar
          </button>
        }
        action={
          <button
            type="button"
            onClick={handleDeleteTask}
            className="rounded-lg border border-danger bg-danger/10 px-4 py-2 text-sm font-bold text-gray-200 transition-colors hover:bg-danger/20"
          >
            Sim, excluir a tarefa
          </button>
        }
        trigger={
          <button
            type="button"
            className="flex size-6 min-w-6 items-center justify-center rounded-[4px] text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger"
          >
            <Trash className="size-[0.875rem]" />
          </button>
        }
      />
    </div>
  )
}
