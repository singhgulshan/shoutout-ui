'use client'

import { ActionIcon } from '@mantine/core'
import { IconCornerUpRight } from '@tabler/icons-react'
import BackButton from '@components/BackButton'
import styles from './reviewer-header.module.scss'

export default function ReviewerHeader() {
  return (
    <div className={styles.container}>
      <BackButton onClick={() => {}} />
      <div className={styles.details}>
        <p className={styles.name}>John Doe</p>
        <p className={styles.username}>@johndoe</p>
      </div>
      <ActionIcon variant='transparent' size='xl' aria-label='Share'>
        <IconCornerUpRight stroke={2} />
      </ActionIcon>
    </div>
  )
}
