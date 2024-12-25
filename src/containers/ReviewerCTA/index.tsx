import { ActionIcon, Button } from '@mantine/core'
import { IconBrandInstagram } from '@tabler/icons-react'
import styles from './reviewer-cta.module.scss'

export default function ReviewerCTA() {
  return (
    <div className={styles.container}>
      <Button disabled size='lg' fullWidth>
        Following
      </Button>
      <Button size='lg' fullWidth>
        Message
      </Button>
      <ActionIcon
        className={styles.social}
        size={50}
        variant='light'
        radius='xl'
      >
        <IconBrandInstagram />
      </ActionIcon>
    </div>
  )
}
