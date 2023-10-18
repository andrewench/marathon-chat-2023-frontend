import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import { AppConstant } from '@/shared/constants'

import { roboto } from '@/shared/fonts'

import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  title: AppConstant.app.titlePrefix + 'Log in',
}

const LoginLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

export default LoginLayout
