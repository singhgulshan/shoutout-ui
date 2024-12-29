import { IconPencil } from '@tabler/icons-react'
import LazyImage from '@components/LazyImage'
import styles from './profile-details.module.scss'

export default function ProfileDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <LazyImage className={styles.avatar} src='/images/user1.png' />
        {/* <div className={styles.name}>
          <p className={styles.initials}>JD</p>
        </div> */}
        <button className={styles.edit}>
          <IconPencil stroke={2} size={12} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <div className={styles.section}>
            <p className={styles.number}>97</p>
            <p className={styles.label}>Followers</p>
          </div>
          <div className={styles.section}>
            <p className={styles.number}>23k</p>
            <p className={styles.label}>Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}
