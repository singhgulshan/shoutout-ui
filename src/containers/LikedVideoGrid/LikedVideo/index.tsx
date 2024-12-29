import { useRouter } from 'next/navigation'
import LazyImage from '@components/LazyImage'
import styles from './liked-video.module.scss'

interface LikedVideoProps {
  video: number
}

export default function LikedVideo({ video }: Readonly<LikedVideoProps>) {
  const router = useRouter()
  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/liked/${video}`)}
    >
      <LazyImage className={styles.image} src={`/images/food${video}.png`} />
      <div className={styles.overlay}>
        <p className={styles.name}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          cum!
        </p>
      </div>
    </div>
  )
}
