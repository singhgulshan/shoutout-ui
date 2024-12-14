import { Button } from '@mantine/core'
import { useSwipeable } from 'react-swipeable'
import AboutRestaurant from '@containers/AboutRestaurant'
import MoreInfo from '@containers/MoreInfo'
import RestaurantHeader from '@containers/RestaurantHeader'
import RestaurantLinks from '@containers/RestaurantLinks'
import RestaurantMenu from '@containers/RestaurantMenu'
import RestaurantReviews from '@containers/RestaurantReviews'
import SimilarRestaurants from '@containers/SimilarRestaurants'
import Surface from '@components/Surface'
import VerticalSpace from '@components/VerticalSpace'

interface RestarauntDetailsProps {
  onClickChecking: () => void
  onClickBack: () => void
}

export default function RestarauntDetails({
  onClickChecking,
  onClickBack,
}: Readonly<RestarauntDetailsProps>) {
  const handlers = useSwipeable({
    delta: 20,
    onSwipedRight,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
  })

  function onSwipedRight() {
    onClickBack()
  }

  return (
    <div {...handlers}>
      <Surface>
        <VerticalSpace space='1rem' />
        <RestaurantHeader onClickBack={onClickBack} />
        <VerticalSpace space='1.5rem' />
        <RestaurantLinks />
        <VerticalSpace space='1.5rem' />
        <Button color='primary' onClick={onClickChecking} fullWidth size='lg'>
          Check-In
        </Button>
        <VerticalSpace space='1.5rem' />
        <AboutRestaurant />
      </Surface>
      <VerticalSpace space='1rem' />
      <RestaurantMenu />
      <VerticalSpace space='1rem' />
      <MoreInfo />
      <VerticalSpace space='1rem' />
      <RestaurantReviews />
      <VerticalSpace space='1rem' />
      <SimilarRestaurants />
    </div>
  )
}
