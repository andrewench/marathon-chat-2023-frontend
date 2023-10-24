import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser, TRootState } from '@/shared/types'

type TRoom = {
  roomId: string
  userId: number
}

interface IState {
  data: IUser
  room: TRoom
}

const initialState: IState = {
  data: {} as IUser,
  room: {} as TRoom,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
    },
    setRoomData: (state, action: PayloadAction<TRoom>) => {
      state.room = action.payload
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice

export const user = (state: TRootState) => state.user
