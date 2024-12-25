import { AppSidebarProvider } from '@app/providers/AppSidebar'
import Feeds from '@containers/Feeds'

export default function Home() {
  return (
    <AppSidebarProvider>
      <Feeds />
    </AppSidebarProvider>
  )
}
