import SeeMoreCard from '@components/SeeMoreCard'
import InfoBlock from './InfoBlock'
import styles from './more-info.module.scss'

export default function MoreInfo() {
  return (
    <SeeMoreCard cta='See all'>
      <div className={styles.container}>
        <h2>More info</h2>
        <div className={styles.content}>
          <InfoBlock content='Breakfast' />
          <InfoBlock content='Mexican' />
          <InfoBlock content='Happy hours 3-5pm' />
          <InfoBlock content='Indoor Seating' />
          <InfoBlock content='Wifi' />
          <InfoBlock content='Dark Setting' />
        </div>
      </div>
    </SeeMoreCard>
  )
}
