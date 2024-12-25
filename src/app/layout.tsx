import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import AppLayout from '@app/layout'
import AppHeight from '@app/providers/AppHeight'
import { theme } from '../theme'
import '@mantine/core/styles.css'
import '@styles/main.scss'

const poppins = Poppins({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
        <style>
          {`
            :root {
              --font: ${poppins.style.fontFamily};
            }
          `}
        </style>
      </head>

      <body id='shoutout-main'>
        <MantineProvider theme={theme}>
          <AppHeight />
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
