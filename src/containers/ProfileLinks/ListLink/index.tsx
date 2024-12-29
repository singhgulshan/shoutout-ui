import { ReactNode } from 'react'
import { IconChevronRight } from '@tabler/icons-react'
import styles from './list-link.module.scss'

interface ListLinkProps {
  onClick?: () => void
  icon: ReactNode
  label: string
  meta?: string
}

export default function ListLink({
  icon,
  label,
  meta,
  onClick,
}: Readonly<ListLinkProps>) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.item}>
        {icon}
        <p className={styles.name}>
          {label} {meta && <span className={styles.meta}>{meta}</span>}
        </p>
      </div>
      <IconChevronRight size={16} />
    </div>
  )
}
