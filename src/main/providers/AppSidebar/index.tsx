'use client'

import { createContext, ReactNode, useContext } from 'react'
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
  const [isAppSidebarOpen, { open: openAppSidebar, close: closeAppSidebar }] =
    useDisclosure()
  const [isCheckinOpen, { open: openCheckin, close: closeCheckin }] =
    useDisclosure()

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
