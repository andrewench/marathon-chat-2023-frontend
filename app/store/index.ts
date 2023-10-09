import { appReducer } from './slices'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userApi } from '@/store/api'

const rootReducer = combineReducers({
  app: appReducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([userApi.middleware]),
})
