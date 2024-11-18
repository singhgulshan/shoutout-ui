import { ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import AppHeight from '@app/providers/AppHeight';
import { theme } from '../theme';
import '@mantine/core/styles.css';
import "@styles/main.scss"
import AppLayout from '@app/layout';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <style>
          {`
            :root {
              --font: ${workSans.style.fontFamily};
            }
          `}
        </style>
      </head>

      <body>
        <MantineProvider theme={theme}>
          <AppHeight />
          <AppLayout>
            {children}
          </AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}