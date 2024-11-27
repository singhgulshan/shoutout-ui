import { MouseEvent, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './aspect-ratio.module.scss'

type AspectRatioProps = {
  height?: number
  width?: number
  className?: string
  onClick?(event: MouseEvent<HTMLDivElement>): void
  children?: ReactNode
}

export default function AspectRatio({
  height = 1,
  width = 1,
  className,
  onClick,
  children,
}: Readonly<AspectRatioProps>) {
  return (
    <div
      className={clsx(styles.container, className)}
      onClick={onClick}
      style={{ paddingBottom: `${(height / width) * 100}%` }}
    >
      <div className={styles.container__inner}>{children}</div>
    </div>
  )
}
