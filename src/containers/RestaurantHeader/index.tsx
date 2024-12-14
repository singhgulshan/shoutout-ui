'use client'

import { IconStarFilled } from '@tabler/icons-react'
import AppContainer from '@components/AppContainer'
import BackButton from '@components/BackButton'
import Chip from '@components/Chip'
import styles from './restaurant-header.module.scss'

interface RestaurantHeaderProps {
  onClickBack: () => void
}

export default function RestaurantHeader({
  onClickBack,
}: Readonly<RestaurantHeaderProps>) {
  return (
    <AppContainer>
      <div className={styles.container}>
        <BackButton onClick={onClickBack} />
        <div className={styles.details}>
          <div className={styles['details-left']}>
            <h1>Pizza Hut</h1>
            <p>Pizza, American</p>
            <p>Pondok Gede, Bekasi</p>
          </div>
          <div className={styles['details-right']}>
            <Chip>
              3.7&nbsp;
              <IconStarFilled size={14} />
              &nbsp;Rated
            </Chip>
          </div>
        </div>
      </div>
    </AppContainer>
  )
}
