import Chip from '@components/Chip'
import styles from './restaurant-links.module.scss'

export default function RestaurantLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Chip variant='light'>Dining Menu</Chip>
      </div>
      <div className={styles.links}>
        <Chip variant='light'>Reviews</Chip>
      </div>
      <div className={styles.links}>
        <Chip variant='light'>Photos</Chip>
      </div>
      <div className={styles.links}>
        <Chip variant='light'>More Info</Chip>
      </div>
      <div className={styles.links}>
        <Chip variant='light'>Offers</Chip>
      </div>
    </div>
  )
}
