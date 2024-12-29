import { Button } from '@mantine/core'
import dayjs from 'dayjs'
import styles from './wallet-money.module.scss'

export default function WalletMoney() {
  return (
    <div className={styles.container}>
      <Button size='lg' variant='light' color='dark' radius='xl'>
        History
      </Button>
      <div className={styles.pie}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.chart}>
              <p className={styles.month}>{dayjs().format('MMMM')}</p>
              <p className={styles.amount}>
                <span className={styles.currency}>$</span> 3453
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button size='lg' radius='xl'>
        Cash Out
      </Button>
    </div>
  )
}
