/* eslint-disable @next/next/no-img-element */
'use client'

import { ImgHTMLAttributes, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './lazy-image.module.scss'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  threshold?: number
}

export default function LazyImage({
  src,
  alt,
  className,
  threshold = 0.1,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const placeholder = '/images/loading.png'

  function setLoadedTrue() {
    setIsLoaded(true)
  }

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let imgLoader: HTMLImageElement | null = null

    if (imageRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              imgLoader = new Image()
              imgLoader.src = src

              imgLoader.onload = setLoadedTrue

              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold }
      )

      observer.observe(imageRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
      if (imgLoader) imgLoader.onload = null
    }
  }, [src, threshold])

  return (
    <img
      loading='lazy'
      ref={imageRef}
      src={isLoaded ? src : placeholder}
      alt={alt}
      className={clsx(styles.container, isLoaded && styles.loaded, className)}
      {...props}
    />
  )
}
