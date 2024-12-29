'use client'

import { useRouter } from 'next/navigation'
import {
  IconCoin,
  IconHeart,
  IconPackage,
  IconWallet,
} from '@tabler/icons-react'
import ListLink from './ListLink'
import styles from './profile-links.module.scss'

export default function ProfileLinks() {
  const router = useRouter()

  function onWalletClick() {
    router.push('/profile/wallet')
  }
  return (
    <div className={styles.container}>
      <ListLink icon={<IconCoin />} label='Rewards' meta='($564.46)' />
      <ListLink icon={<IconPackage />} label='My Orders' />
      <ListLink icon={<IconHeart />} label='Liked Videos' />
      <ListLink
        icon={<IconWallet />}
        label='My Wallet'
        onClick={onWalletClick}
      />
    </div>
  )
}
