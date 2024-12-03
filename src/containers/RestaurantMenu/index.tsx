import ImageStack from '@components/ImageStack'
import SeeMoreCard from '@components/SeeMoreCard'
import styles from './restaurant-menu.module.scss'

export default function RestaurantMenu() {
  return (
    <SeeMoreCard cta='See full menu'>
      <div className={styles.container}>
        <h2>Menu</h2>
        <p className={styles.subtitle}>FULL MENU</p>
        <div className={styles.menu}>
          <div className={styles.item}>
            <ImageStack url='/images/menu1.jpeg' />
            <p className={styles.name}>Food Menu</p>
            <p className={styles.pages}>42 Pages</p>
          </div>
          <div className={styles.item}>
            <ImageStack url='/images/menu1.jpeg' />
            <p className={styles.name}>Beverages</p>
            <p className={styles.pages}>12 Pages</p>
          </div>
        </div>
      </div>
    </SeeMoreCard>
  )
}
