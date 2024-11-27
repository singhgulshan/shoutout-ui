import { ReactNode } from 'react'
import styles from './app-container.module.scss'

type AppContainerProps = {
  children: ReactNode
}

export default function AppContainer({
  children,
}: Readonly<AppContainerProps>) {
  return <div className={styles.container}>{children}</div>
}
