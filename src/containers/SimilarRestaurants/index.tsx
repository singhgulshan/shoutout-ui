import RestaurantCard from '@components/RestaurantCard'
import SeeMoreCard from '@components/SeeMoreCard'
import styles from './similar-restaurants.module.scss'

export default function SimilarRestaurants() {
  return (
    <SeeMoreCard cta='See all similar restaurants'>
      <div className={styles.container}>
        <h2>Similar Restaurants</h2>
        <div className={styles.restaurants}>
          <div className={styles.restaurant}>
            <RestaurantCard
              category='Pizza, Fast food'
              image='/images/pizza2.jpeg'
              name='Dominos Pizza'
            />
          </div>
          <div className={styles.restaurant}>
            <RestaurantCard
              category='Pizza, Italian'
              image='/images/pizza3.jpeg'
              name='Pizza Marzano'
            />
          </div>
          <div className={styles.restaurant}>
            <RestaurantCard
              category='Pizza, Pasta'
              image='/images/pizza2.jpeg'
              name='Warm Oven Pizza'
            />
          </div>
          <div className={styles.restaurant}>
            <RestaurantCard
              category='Pizza, Fast Food'
              image='/images/pizza3.jpeg'
              name='Margherita Pizza'
            />
          </div>
        </div>
      </div>
    </SeeMoreCard>
  )
}
