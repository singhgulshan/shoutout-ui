'use client'

import LikedHeader from '@containers/LikedHeader'
import LikedVideoGrid from '@containers/LikedVideoGrid'
import AppContainer from '@components/AppContainer'
import VerticalSpace from '@components/VerticalSpace'

export default function Liked() {
  return (
    <AppContainer>
      <VerticalSpace space='1rem' />
      <LikedHeader />
      <VerticalSpace space='1rem' />
      <LikedVideoGrid />
    </AppContainer>
  )
}
