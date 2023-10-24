import { appReducer, modalsReducer, userReducer } from './slices'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authApi, roomApi, userApi } from '@/store/api'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  modals: modalsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [roomApi.reducerPath]: roomApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      roomApi.middleware,
    ]),
})
