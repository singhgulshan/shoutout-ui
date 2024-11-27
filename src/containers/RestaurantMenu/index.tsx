import { Button } from '@mantine/core'
import AppContainer from '@components/AppContainer'
import ImageStack from '@components/ImageStack'
import Separator from '@components/Separator'
import Surface from '@components/Surface'
import VerticalSpace from '@components/VerticalSpace'
import styles from './restaurant-menu.module.scss'

export default function RestaurantMenu() {
  return (
    <Surface>
      <AppContainer>
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
          <VerticalSpace space='1rem' />
          <Separator />
          <VerticalSpace space='1rem' />
          <div className={styles.button}>
            <Button size='lg' variant='transparent'>
              See full menu
            </Button>
          </div>
          <VerticalSpace space='1rem' />
        </div>
      </AppContainer>
    </Surface>
  )
}
