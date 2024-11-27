import {
  IconClock,
  IconCoin,
  IconLocationFilled,
  IconMapPin,
  IconPhone,
  IconSoup,
} from '@tabler/icons-react'
import AppContainer from '@components/AppContainer'
import AspectRatio from '@components/AspectRatio'
import LazyImage from '@components/LazyImage'
import styles from './about-restaurant.module.scss'

export default function AboutRestaurant() {
  return (
    <AppContainer>
      <div className={styles.container}>
        <h2>About the restaurant</h2>
        <div className={styles.image}>
          <AspectRatio width={4} height={3}>
            <LazyImage src='/images/pizza.png' />
            <button className={styles.button}>See all</button>
          </AspectRatio>
        </div>
        <div className={styles.description}>
          <div className={styles.content}>
            <div className={styles.main}>
              <IconClock size={16} className={styles.icon} />
              <p>
                <span className={styles.highlight}>Closed</span> | Opens at 7h
              </p>
            </div>
            <IconPhone size={16} className={styles['aux-icon']} />
          </div>

          <div className={styles.content}>
            <div className={styles.main}>
              <IconCoin size={16} className={styles.icon} />
              <p>$25 for 2</p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.main}>
              <IconSoup size={16} className={styles.icon} />
              <p>Serves Pizza, American</p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.main}>
              <IconMapPin size={22} className={styles.icon} />
              <p>
                <span className={styles.highlight}>2.1 miles</span> | Jl.
                Jatiwaringin No.1A, Pondok Gede, Bekasi
              </p>
            </div>
            <IconLocationFilled size={16} className={styles['aux-icon']} />
          </div>
        </div>
      </div>
    </AppContainer>
  )
}
