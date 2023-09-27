import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

export const selectedStore = (state: ReturnType<typeof store.getState>) => state
