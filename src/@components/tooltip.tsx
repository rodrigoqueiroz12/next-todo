import * as RadixTooltip from '@radix-ui/react-tooltip'

interface TooltipProps {
  trigger: React.ReactNode
  message: string
}

export default function Tooltip({ trigger, message }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className="z-20 rounded-md border border-gray-500 bg-gray-600 p-2 text-sm text-gray-200">
          {message}
          <RadixTooltip.Arrow className="fill-gray-600" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
