import AspectRatio from '@components/AspectRatio'
import LazyImage from '@components/LazyImage'
import styles from './restaurant-card.module.scss'

type RestaurantCardProps = {
  name: string
  category: string
  image: string
  onClick?: () => void
}

export default function RestaurantCard({
  category,
  image,
  name,
  onClick,
}: Readonly<RestaurantCardProps>) {
  return (
    <div className={styles.container} onClick={onClick}>
      <AspectRatio width={16} height={9}>
        <LazyImage src={image} className={styles.image} />
      </AspectRatio>
      <p className={styles.name}>{name}</p>
      <p className={styles.category}>{category}</p>
    </div>
  )
}
