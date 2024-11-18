'use client'

import { usePathname, useRouter } from 'next/navigation';
import { IconHomeFilled ,IconVideoFilled,IconUserFilled} from '@tabler/icons-react';
import styles from './app-bar.module.scss'
import Tab from './Tab';

const FEED_PATH = '/'
const CREATE_PATH = '/create'
const PROFILE_PATH = '/profile'

export default function AppBar() {
  const path = usePathname()
  const router = useRouter()

  function handleTabClick(pathName: string) {
    router.push(pathName)
  }

  return (
    <div className={styles.container}>
      <Tab
        label="Feed"
        icon={<IconHomeFilled />}
        active={path === FEED_PATH}
        onClick={() => handleTabClick(FEED_PATH)}
      />
      <Tab
        label="Create"
        icon={<IconVideoFilled />}
        active={path === CREATE_PATH}
        onClick={() => handleTabClick(CREATE_PATH)}
      />
      <Tab
        label="Profile"
        icon={<IconUserFilled />}
        active={path === PROFILE_PATH}
        onClick={() => handleTabClick(PROFILE_PATH)}
      />
    </div>
  )
}