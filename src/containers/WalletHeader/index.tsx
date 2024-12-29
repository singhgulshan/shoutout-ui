'use client'

import BackButton from '@components/BackButton'
import styles from './wallet-header.module.scss'

export default function WalletHeader() {
  return (
    <div className={styles.container}>
      <BackButton onClick={() => {}} />
      <div className={styles.details}>
        <p>Wallet</p>
      </div>
    </div>
  )
}
