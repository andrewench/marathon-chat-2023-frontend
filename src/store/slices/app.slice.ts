import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootStateType } from '@/shared/types'

interface IState {
  sideBar: {
    isOpen: boolean
  }
}

const initialState: IState = {
  sideBar: {
    isOpen: true,
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSideBar: (state, action: PayloadAction<boolean>) => {
      state.sideBar.isOpen = action.payload
    },
  },
})

export const { actions: appActions, reducer: appReducer } = appSlice

export const app = (state: RootStateType) => state.app
