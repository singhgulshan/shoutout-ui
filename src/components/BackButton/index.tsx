import { ActionIcon } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

type BackButtonProps = {
  onClick: () => void
}

export default function BackButton({ onClick }: Readonly<BackButtonProps>) {
  return (
    <ActionIcon
      variant='transparent'
      size='xl'
      aria-label='Back'
      onClick={onClick}
    >
      <IconArrowLeft stroke={2} />
    </ActionIcon>
  )
}
