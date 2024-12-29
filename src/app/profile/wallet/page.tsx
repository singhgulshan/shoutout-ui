import WalletEarnings from '@containers/WalletEarnings'
import WalletHeader from '@containers/WalletHeader'
import AppContainer from '@components/AppContainer'
import VerticalSpace from '@components/VerticalSpace'

export default function Wallet() {
  return (
    <AppContainer>
      <VerticalSpace space='1rem' />
      <WalletHeader />
      <VerticalSpace space='1rem' />
      <WalletEarnings />
    </AppContainer>
  )
}
