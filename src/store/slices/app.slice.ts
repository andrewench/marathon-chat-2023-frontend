import { createSlice } from '@reduxjs/toolkit'

import { RootStateType } from '@/shared/types'

interface IState {
  sideBar: {
    isOpen: boolean
  }
}

const initialState: IState = {
  sideBar: {
    isOpen: false,
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBar.isOpen = !state.sideBar.isOpen
    },
  },
})

export const { actions: appActions, reducer: appReducer } = appSlice

export const app = (state: RootStateType) => state.app
