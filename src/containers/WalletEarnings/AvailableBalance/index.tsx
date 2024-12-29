import { IconWallet } from '@tabler/icons-react'
import styles from './available-balance.module.scss'

export default function AvailableBalance() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <IconWallet stroke={1} size={38} />
      </div>
      <div className={styles.content}>
        <div className={styles.earnings}>
          <p className={styles.amount}>Available Balance</p>
          <p className={styles.total}>Lifetime Earnings</p>
        </div>
        <div className={styles.balance}>
          <p className={styles.amount}>$&nbsp;3453</p>
          <p className={styles.total}>$&nbsp;6547</p>
        </div>
      </div>
    </div>
  )
}
