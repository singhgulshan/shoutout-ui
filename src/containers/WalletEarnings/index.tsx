import { Tabs, TabsList, TabsTab } from '@mantine/core'
import VerticalSpace from '@components/VerticalSpace'
import AvailableBalance from './AvailableBalance'
import WalletMoney from './WalletMoney'
import styles from './wallet-earnings.module.scss'

export default function WalletEarnings() {
  return (
    <div className={styles.container}>
      <Tabs
        defaultValue='rewards'
        color='dark'
        classNames={{ tab: styles.tab }}
      >
        <TabsList grow>
          <TabsTab size='24rem' value='rewards'>
            Rewards
          </TabsTab>
          <TabsTab size={14} value='earnings'>
            Earnings
          </TabsTab>
        </TabsList>
      </Tabs>
      <VerticalSpace space='2rem' />
      <WalletMoney />
      <VerticalSpace space='2rem' />
      <AvailableBalance />
    </div>
  )
}
