import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

import { AppConstant } from '@/shared/constants'

import { roboto } from '@/shared/fonts'

import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  title: AppConstant.app.titlePrefix + 'Classroom',
}

const ClassRoomLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(roboto.className, 'keep-scroll')}>{children}</body>
    </html>
  )
}

export default ClassRoomLayout
