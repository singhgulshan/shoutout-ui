/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Drawer, useDrawersStack } from '@mantine/core'
import clsx from 'clsx'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSwipeable } from 'react-swipeable'
import { useAppSidebar } from '@app/providers/AppSidebar'
import RestarauntDetails from '@containers/RestaurantDetails'
import Video from '@components/Video'
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
    url: 'https://media.battlexo.com/shorts/732/d9ff4208-0dd3-457f-ac4c-f9f4a1218027.mp4',
  },
  {
    id: '2',
    url: 'https://media.battlexo.com/shorts/2300/fbf2f8b0-c4e5-44fc-a19b-78a94305bc52.mp4',
  },
  {
    id: '3',
    url: 'https://media.battlexo.com/shorts/2297/46cea35f-9a89-425a-a2ed-984dfbd81ae8.mp4',
  },
  {
    id: '4',
    url: 'https://media.battlexo.com/shorts/2295/e427f86f-7d12-4dd6-9e67-e4406cba5170.mp4',
  },
  {
    id: '5',
    url: 'https://media.battlexo.com/shorts/2289/635bc804-0fc1-48c8-9aee-3e0473ddf4de.mp4',
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

const DRAWERS = {
  DETAILS: 'details',
  CHECKIN: 'checkin',
} as const

type DrawersStack = (typeof DRAWERS)[keyof typeof DRAWERS]

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
  const stack = useDrawersStack<DrawersStack>([
    DRAWERS.DETAILS,
    DRAWERS.CHECKIN,
  ])
  const handlers = useSwipeable({
    delta: 20,
    onSwipedLeft,
    preventScrollOnSwipe: true,
    swipeDuration: 500,
  })
  const router = useRouter()

  // useEffect(() => {
  //   router
  //   router.beforePopState(handlePopState)

  //   return () => {
  //     router.beforePopState(() => true)
  //   }
  // }, [router])

  const handlePopState = () => {
    console.log('popstate')
    if (isCheckinOpen) {
      closeCheckin()
      return false
    }
    if (isAppSidebarOpen) {
      closeAppSidebar()
      return false
    }
    return true
  }

  useEffect(() => {
    if (isAppSidebarOpen) {
      stack.open(DRAWERS.DETAILS)
    } else {
      stack.close(DRAWERS.DETAILS)
    }
  }, [isAppSidebarOpen])

  useEffect(() => {
    if (isCheckinOpen) {
      stack.open(DRAWERS.CHECKIN)
    } else {
      stack.close(DRAWERS.CHECKIN)
    }
  }, [isCheckinOpen])

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
        {...stack.register(DRAWERS.DETAILS)}
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
      >
        <RestarauntDetails
          onClickChecking={openCheckin}
          onClickBack={closeAppSidebar}
        />
      </Drawer>
      <Drawer
        {...stack.register(DRAWERS.CHECKIN)}
        position='right'
        size='100%'
        withOverlay={false}
        withCloseButton={false}
        returnFocus={false}
        trapFocus={false}
      >
        <Button color='primary' fullWidth size='lg' onClick={closeCheckin}>
          Close
        </Button>
      </Drawer>
    </div>
  )
}
