import ReviewerBio from '@containers/ReviewerBio'
import ReviewerCTA from '@containers/ReviewerCTA'
import ReviewerHeader from '@containers/ReviewerHeader'
import ReviewerProfile from '@containers/ReviewerProfile'
import AppContainer from '@components/AppContainer'
import VerticalSpace from '@components/VerticalSpace'

interface ReviewverProps {
  params: Promise<{ userId: string }>
}

export default async function Reviewver({ params }: Readonly<ReviewverProps>) {
  const { userId } = await params
  console.log({ userId })

  return (
    <AppContainer>
      <ReviewerHeader />
      <VerticalSpace space='1rem' />
      <ReviewerProfile />
      <VerticalSpace space='0.5rem' />
      <ReviewerBio />
      <VerticalSpace space='1rem' />
      <ReviewerCTA />
    </AppContainer>
  )
}
