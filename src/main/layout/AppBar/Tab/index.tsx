import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './tab.module.scss'

type TabProps = {
  label: string
  icon: ReactNode
  active: boolean
  onClick: () => void
}
export default function Tab({
  label,
  icon,
  active,
  onClick,
}: Readonly<TabProps>) {
  return (
    <div
      className={clsx(styles.container, active && styles.active)}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}
