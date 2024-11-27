import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './chip.module.scss'

type ChipProps = {
  children: ReactNode
  variant?: 'light' | 'primary' | 'secondary'
  onClick?: () => void
}

export default function Chip({
  children,
  variant = 'primary',
  onClick,
}: Readonly<ChipProps>) {
  return (
    <div className={clsx(styles.container, styles[variant])} onClick={onClick}>
      {children}
    </div>
  )
}
