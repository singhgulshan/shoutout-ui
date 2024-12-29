'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  IconHeartFilled,
  IconHomeFilled,
  IconUserFilled,
  IconVideoFilled,
} from '@tabler/icons-react'
import clsx from 'clsx'
import { useAppSidebar } from '@app/providers/AppSidebar'
import Tab from './Tab'
import styles from './app-bar.module.scss'

const FEED_PATH = '/'
const CREATE_PATH = '/create'
const PROFILE_PATH = '/profile'
const LIKED_PATH = '/liked'

export default function AppBar() {
  const path = usePathname()
  const router = useRouter()
  const { isAppSidebarOpen } = useAppSidebar()

  function handleTabClick(pathName: string) {
    router.push(pathName)
  }

  return (
    <div className={clsx(styles.container, isAppSidebarOpen && styles.open)}>
      <Tab
        label='Feed'
        icon={<IconHomeFilled />}
        active={path === FEED_PATH}
        onClick={() => handleTabClick(FEED_PATH)}
      />
      <Tab
        label='Create'
        icon={<IconVideoFilled />}
        active={path === CREATE_PATH}
        onClick={() => handleTabClick(CREATE_PATH)}
      />
      <Tab
        label='Liked'
        icon={<IconHeartFilled />}
        active={path.includes(LIKED_PATH)}
        onClick={() => handleTabClick(LIKED_PATH)}
      />
      <Tab
        label='Profile'
        icon={<IconUserFilled />}
        active={path.includes(PROFILE_PATH)}
        onClick={() => handleTabClick(PROFILE_PATH)}
      />
    </div>
  )
}
