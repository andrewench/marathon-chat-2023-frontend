'use client'

import { FC } from 'react'

import { Content, PageLayout } from '@/components/layout'

import { MainProvider } from '@/components/providers'

const ClassRoom: FC = () => {
  return (
    <MainProvider>
      <PageLayout>
        <Content />
      </PageLayout>
    </MainProvider>
  )
}

export default ClassRoom
