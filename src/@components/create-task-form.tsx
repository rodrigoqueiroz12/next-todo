'use client'

import { PlusCircle } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

import { useTasks } from '@/@context/tasks-context'

export default function CreateTaskForm() {
  const [description, setDescription] = useState('')
  const { createTask } = useTasks()

  function handleChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target

    setDescription(value)
  }

  function handleCreateTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (description.trim() === '') return

    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve(null), 2000))

    toast.promise(promise, {
      loading: 'Carregando...',
      success: () => {
        createTask(description)
        setDescription('')

        return 'Tarefa criada com sucesso'
      },
    })
  }

  return (
    <form onSubmit={handleCreateTask} className="-mt-7 flex w-full gap-2">
      <input
        value={description}
        type="text"
        onChange={handleChangeDescription}
        className="flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 leading-[1.4] text-gray-100 outline-none transition-colors placeholder:text-gray-300 [&:not(:placeholder-shown)]:border-purple-dark"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="flex items-center gap-2 rounded-lg bg-blue-dark p-4 text-sm font-bold text-gray-100 transition-colors hover:bg-blue-regular">
        Criar
        <PlusCircle className="size-4" />
      </button>
    </form>
  )
}
