import { IconCircleCheck } from '@tabler/icons-react'
import styles from './info-block.module.scss'

export type InfoBlockProps = {
  content: string
}

export default function InfoBlock({ content }: Readonly<InfoBlockProps>) {
  return (
    <div className={styles.container}>
      <IconCircleCheck className={styles.icon} size={15} />
      <p>{content}</p>
    </div>
  )
}
