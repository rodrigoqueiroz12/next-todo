import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

interface AlertDialogProps {
  trigger: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  cancel?: React.ReactNode
  action?: React.ReactNode
}

export default function AlertDialog({
  trigger,
  title,
  description,
  cancel,
  action,
}: AlertDialogProps) {
  return (
    <RadixAlertDialog.Root>
      <RadixAlertDialog.Trigger asChild>{trigger}</RadixAlertDialog.Trigger>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className="animate-overlay-fade-in fixed inset-0 z-10 bg-gray-700/50" />

        <RadixAlertDialog.Content className="animate-modal-fade-in fixed left-1/2 top-1/2 z-10 w-full max-w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg border-gray-400 bg-gray-500 p-6">
          {title && (
            <RadixAlertDialog.Title
              asChild
              className="mb-4 border-b border-gray-400 pb-4 text-base font-bold text-gray-100"
            >
              {title}
            </RadixAlertDialog.Title>
          )}

          {description && (
            <RadixAlertDialog.Description
              asChild
              className="mb-8 leading-relaxed text-gray-200"
            >
              {description}
            </RadixAlertDialog.Description>
          )}

          <div className="flex items-center justify-end gap-4">
            {cancel && (
              <RadixAlertDialog.Cancel asChild>
                {cancel}
              </RadixAlertDialog.Cancel>
            )}

            {action && (
              <RadixAlertDialog.Action asChild>
                {action}
              </RadixAlertDialog.Action>
            )}
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  )
}
