import AspectRatio from '@components/AspectRatio'
import LazyImage from '@components/LazyImage'
import styles from './image-stack.module.scss'

type ImageStackProps = {
  url: string
}

export default function ImageStack({ url }: Readonly<ImageStackProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <div className={styles['stack-1']}></div>
        <div className={styles['stack-2']}></div>
        <AspectRatio width={9} height={16}>
          <LazyImage className={styles.image} src={url} />
        </AspectRatio>
      </div>
    </div>
  )
}
