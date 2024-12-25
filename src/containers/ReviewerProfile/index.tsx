import LazyImage from '@components/LazyImage'
import styles from './reviewer-profile.module.scss'

export default function ReviewerProfile() {
  return (
    <div className={styles.container}>
      <LazyImage className={styles.image} src='/images/user1.png' />
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
          <div className={styles.section}>
            <p className={styles.number}>32.4k</p>
            <p className={styles.label}>Votes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
