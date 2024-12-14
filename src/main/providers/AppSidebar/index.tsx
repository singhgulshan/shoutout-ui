/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { createContext, ReactNode, useContext, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDisclosure } from '@mantine/hooks'

interface AppSidebarContextType {
  isAppSidebarOpen: boolean
  openAppSidebar: () => void
  closeAppSidebar: () => void
  openCheckin: () => void
  closeCheckin: () => void
  isCheckinOpen: boolean
}

function mockDrawer() {
  console.log('Mock drawer')
}

const AppSidebarContext = createContext<AppSidebarContextType>({
  isAppSidebarOpen: false,
  closeAppSidebar: mockDrawer,
  openAppSidebar: mockDrawer,
  isCheckinOpen: false,
  closeCheckin: mockDrawer,
  openCheckin: mockDrawer,
})

interface AppSidebarProviderProps {
  children: ReactNode
}

export const AppSidebarProvider: React.FC<AppSidebarProviderProps> = ({
  children,
}) => {
  const [isAppSidebarOpen, { open: sidebarOpen, close: sidebarClose }] =
    useDisclosure()
  const [isCheckinOpen, { open: checkinOpen, close: checkinClose }] =
    useDisclosure()
  const router = useRouter()
  const search = useSearchParams()
  const pathname = usePathname()

  const updateQueryParams = (searchKey: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set(searchKey, 'true')
    const newUrl = `${pathname}?${params.toString()}`
    router.push(newUrl)
  }

  function openAppSidebar() {
    updateQueryParams('sidebar')
    sidebarOpen()
  }

  function closeAppSidebar() {
    router.back()
    sidebarClose()
  }

  function openCheckin() {
    updateQueryParams('checkin')
    checkinOpen()
  }

  function closeCheckin() {
    router.back()
    checkinClose()
  }

  useEffect(() => {
    if (search.get('checkin') === 'true') {
      checkinOpen()
    } else {
      checkinClose()
    }

    if (search.get('sidebar') === 'true') {
      sidebarOpen()
    } else {
      sidebarClose()
    }
  }, [search])

  return (
    <AppSidebarContext.Provider
      value={{
        isAppSidebarOpen,
        openAppSidebar,
        closeAppSidebar,
        isCheckinOpen,
        openCheckin,
        closeCheckin,
      }}
    >
      {children}
    </AppSidebarContext.Provider>
  )
}

export const useAppSidebar = (): AppSidebarContextType => {
  const context = useContext(AppSidebarContext)
  if (!context) {
    throw new Error('useAppSidebar must be used within a DrawerProvider')
  }
  return context
}
