import ProfileBio from '@containers/ProfileBio'
import ProfileDetails from '@containers/ProfileDetails'
import ProfileHeader from '@containers/ProfileHeader'
import ProfileLinks from '@containers/ProfileLinks'
import AppContainer from '@components/AppContainer'
import VerticalSpace from '@components/VerticalSpace'

export default function Profile() {
  return (
    <AppContainer>
      <ProfileHeader />
      <VerticalSpace space='1rem' />
      <ProfileDetails />
      <VerticalSpace space='1rem' />
      <ProfileBio />
      <VerticalSpace space='1rem' />
      <ProfileLinks />
    </AppContainer>
  )
}
