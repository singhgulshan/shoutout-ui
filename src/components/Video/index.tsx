'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import BroomStick from '@icons/BroomStick'
import Community from '@icons/Community'
import Share from '@icons/Share'
import { ActionIcon, Avatar } from '@mantine/core'
import {
  IconBriefcaseFilled,
  IconCurrencyDollar,
  IconDisabled2,
  IconEyeFilled,
  IconHeartFilled,
  IconMapPinFilled,
  IconMessageFilled,
  IconMusic,
  IconPlayerPlayFilled,
  IconRosetteDiscountCheckFilled,
  IconStarFilled,
  IconThumbDownFilled,
  IconThumbUpFilled,
} from '@tabler/icons-react'
import clsx from 'clsx'
import styles from './video.module.scss'

type Video = {
  id: string
  url: string
}

type VideoProps = {
  video: Video
}

export default function Video({ video }: Readonly<VideoProps>) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    const currentVideo = videoRef.current
    if (currentVideo) {
      let timer: NodeJS.Timeout | null = null
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          setButtonClicked(false)
          if (entry.isIntersecting) {
            if (timer) {
              clearTimeout(timer)
              timer = null
            }
            currentVideo.play()
            setIsVideoPlaying(true)
          }
          if (!currentVideo.paused && !entry.isIntersecting) {
            currentVideo.pause()
            timer = setTimeout(() => {
              currentVideo.currentTime = 0
              timer = null
            }, 1000)
            setIsVideoPlaying(false)
          }
        },
        { threshold: 0.6 }
      )

      observer.observe(currentVideo)

      return () => {
        observer.unobserve(currentVideo)
      }
    }
  }, [])

  function toggleVideo() {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
        setIsVideoPlaying(false)
        setButtonClicked(true)
      } else {
        videoRef.current.play()
        setButtonClicked(false)
        setIsVideoPlaying(true)
      }
    }
  }

  function handleReaction(eve: MouseEvent<HTMLButtonElement>) {
    eve.stopPropagation()
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <video muted className={styles['video-overlay']}>
          <source src={video.url} type='video/mp4' />
        </video>
        <video ref={videoRef} playsInline muted loop className={styles.video}>
          <source src={video.url} type='video/mp4' />
        </video>
        <div className={styles.details} onClick={toggleVideo}>
          <div className={styles.reaction}>
            <div className={styles['reaction-details']}>
              <ActionIcon
                variant='transparent'
                className={styles.btn}
                onClick={handleReaction}
              >
                <IconThumbDownFilled size={35} color='#ffffff' />
              </ActionIcon>
              <p className={styles.count}>235</p>
            </div>
            <div className={styles['reaction-details']}>
              <ActionIcon
                variant='transparent'
                className={styles.btn}
                onClick={handleReaction}
              >
                <IconThumbUpFilled size={35} color='#ffffff' />
              </ActionIcon>
              <p className={styles.count}>789</p>
            </div>
          </div>
          <div
            className={clsx(styles.controls, buttonClicked && styles.paused)}
          >
            <IconPlayerPlayFilled size={50} color='#ffffff' />
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <div className={styles.restaurant}>
                <div className={styles['restaurant-info']}>
                  <div className={styles['restaurant-details']}>
                    <Avatar src='/images/user1.png' size='5rem' />
                    <div className={styles.estimates}>
                      <p className={styles.price}>$20-$30</p>
                      <p className={styles.pax}>for 2 diner</p>
                    </div>
                  </div>
                  <button className={styles.book} onClick={handleReaction}>
                    Book a table
                  </button>
                </div>
                <div className={styles['restaurant-attributes']}>
                  <div className={styles.attribute}>
                    <IconHeartFilled size={18} />
                    <p>80%</p>
                  </div>
                  <div className={styles.attribute}>
                    <IconEyeFilled size={18} />
                    <p>43k</p>
                  </div>
                  <div className={styles.attribute}>
                    <IconCurrencyDollar size={18} />
                    <p>Premium</p>
                  </div>
                  <div className={styles.attribute}>
                    <IconThumbUpFilled size={18} />
                    <p>Ambience</p>
                  </div>
                  <div className={styles.attribute}>
                    <BroomStick fontSize={18} />
                    <p>High</p>
                  </div>
                  <div className={styles.attribute}>
                    <IconMapPinFilled size={18} />
                    <p>1.8 miles</p>
                  </div>
                  <div className={styles.attribute}>
                    <IconDisabled2 stroke={2} size={18} />
                  </div>
                  <div className={styles.attribute}>
                    <IconMusic stroke={2} size={18} />
                  </div>
                  <div className={styles.attribute}>
                    <p>#Mexican</p>
                  </div>
                  <div className={styles.attribute}>
                    <p>#Crowded</p>
                  </div>
                  <div className={styles.attribute}>
                    <p>#Michelin star</p>
                  </div>
                </div>
              </div>
              <div className={styles.profile}>
                <Avatar src='/images/user2.png' size='4.7rem' />
                <div className={styles['profile-info']}>
                  <div className={styles.name}>
                    <p className={styles.rate}>$$$</p>
                    <p className={styles.category}>Luxurious</p>
                  </div>
                  <div className={styles.attributes}>
                    <div className={styles.attribute}>
                      <IconStarFilled size={18} />
                      <p>5/5</p>
                    </div>
                    <div className={styles.attribute}>
                      <Community fontSize={18} />
                      <p>58</p>
                    </div>
                    <div className={styles.attribute}>
                      <IconRosetteDiscountCheckFilled size={18} />
                      <p>Verified</p>
                    </div>
                    <div className={styles.attribute}>
                      <IconThumbDownFilled size={18} />
                      <p>3k</p>
                    </div>
                    <div className={styles.attribute}>
                      <IconThumbUpFilled size={18} />
                      <p>43k</p>
                    </div>
                    <div className={styles.attribute}>
                      <IconBriefcaseFilled size={18} />
                      <p>1.2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctas}>
              <div className={styles.cta}>
                <ActionIcon
                  variant='transparent'
                  className={styles.btn}
                  onClick={handleReaction}
                >
                  <IconHeartFilled size={30} color='#ffffff' />
                </ActionIcon>
                <p className={styles.count}>34</p>
              </div>
              <div className={styles.cta}>
                <ActionIcon
                  variant='transparent'
                  className={styles.btn}
                  onClick={handleReaction}
                >
                  <IconMessageFilled size={30} color='#ffffff' />
                </ActionIcon>
                <p className={styles.count}>67</p>
              </div>
              <div className={styles.cta}>
                <ActionIcon
                  variant='transparent'
                  className={styles.btn}
                  onClick={handleReaction}
                >
                  <Share fontSize='3rem' color='#ffffff' />
                </ActionIcon>
                <p className={styles.count}>67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
