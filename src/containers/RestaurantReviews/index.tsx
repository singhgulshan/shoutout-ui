import ReviewCard from '@components/ReviewCard'
import SeeMoreCard from '@components/SeeMoreCard'
import styles from './restaurant-reviews.module.scss'

export default function RestaurantReviews() {
  return (
    <SeeMoreCard cta='See all'>
      <div className={styles.container}>
        <h2>What people say - Google reviews</h2>
        <p className={styles.subtitle}>RECENT REVIEWS</p>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <ReviewCard
              followers={402}
              profileImage='/images/user1.png'
              rating={4}
              review='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              userName='John Doe'
            />
          </div>
          <div className={styles.review}>
            <ReviewCard
              followers={656}
              profileImage='/images/user2.png'
              rating={4.6}
              review='lorem et consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              userName='Jane Smith'
            />
          </div>
          <div className={styles.review}>
            <ReviewCard
              followers={402}
              profileImage='/images/user1.png'
              rating={4}
              review='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              userName='John Doe'
            />
          </div>
          <div className={styles.review}>
            <ReviewCard
              followers={656}
              profileImage='/images/user2.png'
              rating={4.6}
              review='lorem et consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              userName='Jane Smith'
            />
          </div>
        </div>
      </div>
    </SeeMoreCard>
  )
}
