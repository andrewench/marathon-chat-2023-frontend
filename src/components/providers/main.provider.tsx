import { FC } from 'react'

import { StoreProvider } from './store.provider'

import { PageLayout } from '@/components/layout'

export const MainProvider: FC = () => {
  return (
    <StoreProvider>
      <PageLayout />
    </StoreProvider>
  )
}
