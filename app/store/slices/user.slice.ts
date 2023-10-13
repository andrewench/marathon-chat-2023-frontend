import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser, TRootState } from '@/shared/types'

interface IState {
  data: IUser
}

const initialState: IState = {
  data: {} as IUser,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice

export const user = (state: TRootState) => state.user
