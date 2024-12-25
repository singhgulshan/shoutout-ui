import { ActionIcon, List, ListItem } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import LazyImage from '@components/LazyImage'
import styles from './walk-in-offer.module.scss'

interface WalkInOfferProps {
  onBack: () => void
}

export default function WalkInOffer({ onBack }: Readonly<WalkInOfferProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ActionIcon
          variant='transparent'
          color='black'
          size='xl'
          onClick={onBack}
        >
          <IconArrowLeft stroke={2} />
        </ActionIcon>
        <div className={styles.content}>
          <p className={styles.title}>Walk-In Offer</p>
          <p className={styles.subtitle}>Pizza Hut</p>
        </div>
      </div>
      <p className={styles.scan}>Scan this QR code at the restaurant</p>
      <LazyImage className={styles.code} src='/images/qr.png' />
      <p className={styles.disclaimer}>How the Walk-in offer works:</p>
      <List type='ordered' className={styles.list}>
        <ListItem>
          Show the QR code to the restaurant. The QR code can be accessed from
          My Restaurants
        </ListItem>
        <ListItem>Upload the bill from that page</ListItem>
        <ListItem>
          Enter email on that page to get gift card from Shoutout for the
          discounted amount
        </ListItem>
      </List>
    </div>
  )
}
