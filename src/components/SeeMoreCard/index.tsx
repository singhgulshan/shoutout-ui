import { ReactNode } from 'react'
import { Button } from '@mantine/core'
import AppContainer from '@components/AppContainer'
import Separator from '@components/Separator'
import Surface from '@components/Surface'
import VerticalSpace from '@components/VerticalSpace'
import styles from './see-more-card.module.scss'

type SeeMoreCardProps = {
  children: ReactNode
  cta: string
  onClick?: () => void
}

export default function SeeMoreCard({
  children,
  cta,
  onClick,
}: Readonly<SeeMoreCardProps>) {
  return (
    <Surface>
      <AppContainer>
        <div className={styles.container}>
          {children}
          <VerticalSpace space='1rem' />
          <Separator />
          <VerticalSpace space='1rem' />
          <div className={styles.button}>
            <Button size='lg' variant='transparent' onClick={onClick}>
              {cta}
            </Button>
          </div>
          <VerticalSpace space='1rem' />
        </div>
      </AppContainer>
    </Surface>
  )
}
