import { SimpleGrid } from '@mantine/core'
import LikedVideo from './LikedVideo'
import styles from './liked-video-grid.module.scss'

export default function LikedVideoGrid() {
  return (
    <div className={styles.container}>
      <SimpleGrid cols={2}>
        <LikedVideo video={1} />
        <LikedVideo video={2} />
        <LikedVideo video={3} />
        <LikedVideo video={4} />
        <LikedVideo video={5} />
        <LikedVideo video={6} />
      </SimpleGrid>
    </div>
  )
}
