import AboutRestaurant from '@containers/AboutRestaurant'
import MoreInfo from '@containers/MoreInfo'
import RestaurantHeader from '@containers/RestaurantHeader'
import RestaurantLinks from '@containers/RestaurantLinks'
import RestaurantMenu from '@containers/RestaurantMenu'
import Surface from '@components/Surface'
import VerticalSpace from '@components/VerticalSpace'

export default function Home() {
  return (
    <>
      <Surface>
        <VerticalSpace space='1rem' />
        <RestaurantHeader />
        <VerticalSpace space='1.5rem' />
        <RestaurantLinks />
        <VerticalSpace space='1.5rem' />
        <AboutRestaurant />
      </Surface>
      <VerticalSpace space='1rem' />
      <RestaurantMenu />
      <VerticalSpace space='1rem' />
      <MoreInfo />
      <VerticalSpace space='1rem' />
    </>
  )
}
