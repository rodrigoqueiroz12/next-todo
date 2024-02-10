'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import TasksContextProvider from '@/@context/tasks-context'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <TasksContextProvider>
        <Tooltip.Provider delayDuration={750}>{children}</Tooltip.Provider>
      </TasksContextProvider>

      <Toaster
        expand
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              'text-gray-200 p-4 max-w-96 w-full flex items-center gap-3 rounded-lg bg-gray-500 border border-gray-400',
            success: 'bg-gray-500 text-green-400',
            info: 'bg-gray-500',
            title: 'text-gray-200 font-bold',
            description: 'text-gray-200',
          },
        }}
      />
    </>
  )
}
