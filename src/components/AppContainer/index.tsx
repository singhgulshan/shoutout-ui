import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './app-container.module.scss'

type AppContainerProps = {
  children: ReactNode
  className?: string
}

export default function AppContainer({
  children,
  className,
}: Readonly<AppContainerProps>) {
  return <div className={clsx(styles.container, className)}>{children}</div>
}
