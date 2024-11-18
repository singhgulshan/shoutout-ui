"use client"
import { useCallback, useEffect } from "react"

export default function AppHeight() {
  const handleResize = useCallback(() => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [handleResize])

  return <></>
}
