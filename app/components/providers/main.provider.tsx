import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import { StoreProvider } from './store.provider'

import { PageLayout } from '@/components/layout'

export const MainProvider: FC = () => {
  return (
    <StoreProvider>
      <PageLayout />
    </StoreProvider>
  )
}
