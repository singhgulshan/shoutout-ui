import { ReactNode } from 'react'
import AppBar from './AppBar'
import styles from './layout.module.scss'

type LayoutProps = {
  children: ReactNode
}

export default function AppLayout({ children }: Readonly<LayoutProps>) {
  return (
    <div className={styles.container}>
      {children}
      <AppBar />
    </div>
  )
}
