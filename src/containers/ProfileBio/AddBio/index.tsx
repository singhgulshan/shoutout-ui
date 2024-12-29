import { Button } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import styles from './add-bio.module.scss'

export default function AddBio() {
  return (
    <div className={styles.container}>
      <p>Add your bio</p>
      <Button
        variant='transparent'
        rightSection={<IconPencil stroke={2} size={12} />}
        color='dark'
      >
        Edit
      </Button>
    </div>
  )
}
