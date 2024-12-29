'use client'

import BackButton from '@components/BackButton'
import styles from './liked-header.module.scss'

export default function LikedHeader() {
  return (
    <div className={styles.container}>
      <BackButton onClick={() => {}} />
      <div className={styles.details}>
        <p>Liked Videos</p>
      </div>
    </div>
  )
}
