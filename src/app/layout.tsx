import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { FC, PropsWithChildren } from 'react'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marathon Chat by andrewench',
  description: 'Marathon Chat by andrewench',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
