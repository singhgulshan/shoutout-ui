import styles from './profile-header.module.scss'

export default function ProfileHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <p className={styles.name}>John Doe</p>
        <p className={styles.username}>@johndoe</p>
      </div>
    </div>
  )
}
