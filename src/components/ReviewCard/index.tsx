import { Avatar } from '@mantine/core'
import { IconStarFilled } from '@tabler/icons-react'
import { getInitials } from '@utils/string.utils'
import styles from './review-card.module.scss'

type ReviewCardProps = {
  userName: string
  rating: number
  review: string
  followers: number
  profileImage: string
}

export default function ReviewCard({
  followers,
  profileImage,
  rating,
  review,
  userName,
}: Readonly<ReviewCardProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={profileImage} size='lg'>
          {getInitials(userName)}
        </Avatar>
        <div className={styles.user}>
          <p className={styles.name}>{userName}</p>
          <p className={styles.followers}>{followers} Followers</p>
        </div>
        <div className={styles.rating}>
          <p>{rating}</p>
          <IconStarFilled size={12} />
        </div>
      </div>
      <p className={styles.review}>{review}</p>
    </div>
  )
}
