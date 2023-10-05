import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { FC, PropsWithChildren } from 'react'

import './globals.scss'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marathon Chat by andrewench | Sign In',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

export default RootLayout
