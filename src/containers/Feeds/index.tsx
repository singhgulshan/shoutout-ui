/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useEffect, useState } from 'react'
import { Drawer } from '@mantine/core'
import clsx from 'clsx'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSwipeable } from 'react-swipeable'
import { useAppSidebar } from '@app/providers/AppSidebar'
import RestarauntDetails from '@containers/RestaurantDetails'
import Video from '@components/Video'
import WalkInOffer from '@components/WalkInOffer'
import styles from './feeds.module.scss'

type Video = {
  id: string
  url: string
}

async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const video1: Video[] = [
  {
    id: '1',
    url: '/videos/video1.mp4',
  },
  {
    id: '2',
    url: '/videos/video2.mp4',
  },
  {
    id: '3',
    url: '/videos/video3.mp4',
  },
  {
    id: '4',
    url: '/videos/video4.mp4',
  },
  {
    id: '5',
    url: '/videos/video5.mp4',
  },
]

const video2: Video[] = [
  {
    id: '6',
    url: 'https://media.battlexo.com/shorts/2287/74dc88ae-a167-49df-af16-ebae84e404af.mp4',
  },
  {
    id: '7',
    url: 'https://media.battlexo.com/shorts/2281/a92b633f-0776-44c5-92e5-ebad38588529.mp4',
  },
  {
    id: '8',
    url: 'https://media.battlexo.com/shorts/2278/d8ea1349-2714-425a-9047-0d730b554a47.mp4',
  },
  {
    id: '9',
    url: 'https://media.battlexo.com/shorts/2272/14d74632-0a0d-4c94-83e2-9788165b193c.mp4',
  },
  {
    id: '10',
    url: 'https://media.battlexo.com/shorts/2266/06c4576c-b9be-45ba-9ffb-ab7db7e8db11.mp4',
  },
]

export default function Feeds() {
  const [videos, setVideos] = useState<Video[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const {
    isAppSidebarOpen,
    closeAppSidebar,
    openAppSidebar,
    closeCheckin,
    openCheckin,
    isCheckinOpen,
  } = useAppSidebar()

  const handlers = useSwipeable({
    delta: 20,
    onSwipedLeft,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
  })

  function onSwipedLeft() {
    openAppSidebar()
  }

  function incrementPage() {
    setPage((page) => page + 1)
  }

  const fetchVideos = useCallback(async () => {
    await wait(1000)
    if (page === 1) {
      setVideos(video1)
      setHasMore(true)
    }
    if (page === 2) {
      setVideos((prevVideos) => [...prevVideos, ...video2])
      setHasMore(false)
    }
  }, [page])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos, page])

  return (
    <div
      {...handlers}
      className={clsx(styles.container, isAppSidebarOpen && styles.slide)}
    >
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        loader={null}
        next={incrementPage}
        height='calc(var(--app-height) - var(--app-bar-height))'
        className={styles.scroll}
      >
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </InfiniteScroll>
      <Drawer
        transitionProps={{
          duration: 500,
          transition: {
            in: { transform: ' translateX(0)' },
            out: { transform: ' translateX(100%)' },
            transitionProperty: 'transform',
            common: { opacity: 1 },
          },
        }}
        position='right'
        size='100%'
        withOverlay={false}
        withCloseButton={false}
        returnFocus={false}
        trapFocus={false}
        keepMounted
        opened={isAppSidebarOpen}
        onClose={closeAppSidebar}
      >
        <RestarauntDetails
          onClickChecking={openCheckin}
          onClickBack={closeAppSidebar}
        />
      </Drawer>
      <Drawer
        position='right'
        size='100%'
        withOverlay={false}
        withCloseButton={false}
        returnFocus={false}
        trapFocus={false}
        opened={isCheckinOpen}
        onClose={closeCheckin}
      >
        <WalkInOffer onBack={closeCheckin} />
      </Drawer>
    </div>
  )
}
