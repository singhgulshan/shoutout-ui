import { ReactNode } from 'react'
import styles from './layout.module.scss'
import AppBar from './AppBar'

type LayoutProps = {
  children: ReactNode
}

export default function AppLayout({ children }: Readonly<LayoutProps>) {
  console.log("Re-Render");
  return (
    <div className={styles.container}>
      {children}
      <AppBar />
    </div>
  )
}
