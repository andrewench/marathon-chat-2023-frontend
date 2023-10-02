import { appReducer } from './slices'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  app: appReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export const selectedStore = (state: ReturnType<typeof store.getState>) => state
