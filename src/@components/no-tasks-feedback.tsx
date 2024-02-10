import Image from 'next/image'

import clipboard from '../../public/clipboard.png'

export default function NoTasksFeedback() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-t border-gray-400 px-6 py-16 text-gray-300">
      <Image
        src={clipboard}
        width={56}
        height={56}
        alt=""
        className="mb-4 size-14"
      />
      <span className="font-bold">Você não tem tarefas cadastradas</span>
      <span className="">Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
