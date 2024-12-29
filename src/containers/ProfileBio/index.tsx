import { Button } from '@mantine/core'
import VerticalSpace from '@components/VerticalSpace'
import AddBio from './AddBio'
import styles from './profile-bio.module.scss'

export default function ProfileBio() {
  return (
    <div className={styles.container}>
      <AddBio />
      <VerticalSpace space='1rem' />
      <Button variant='light' color='dark' radius='xl' fullWidth>
        Edit Profile
      </Button>
    </div>
  )
}
