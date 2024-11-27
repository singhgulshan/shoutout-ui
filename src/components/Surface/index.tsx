import { ReactNode } from 'react'
import styles from './surface.module.scss'

type SurfaceProps = {
  children: ReactNode
}

export default function Surface({ children }: Readonly<SurfaceProps>) {
  return <div className={styles.container}>{children}</div>
}
