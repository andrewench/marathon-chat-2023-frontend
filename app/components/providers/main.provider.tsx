import { FC, PropsWithChildren } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import { StoreProvider } from './store.provider'
import { ToastProvider } from './toast.provider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      {children}

      <ToastProvider />
    </StoreProvider>
  )
}
