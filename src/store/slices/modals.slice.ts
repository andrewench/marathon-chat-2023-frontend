import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TRootState } from '@/shared/types'

export type TModalKeys = 'logout' | 'attach' | 'uploadAvatar' | 'joinChat'

type TState = Record<TModalKeys, Record<'isOpen', boolean>>

const initialState: TState = {
  logout: {
    isOpen: false,
  },
  attach: {
    isOpen: false,
  },
  uploadAvatar: {
    isOpen: false,
  },
  joinChat: {
    isOpen: false,
  },
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalWindow: (
      state,
      {
        payload: { modal, isOpen },
      }: PayloadAction<{ modal: keyof TState; isOpen: boolean }>,
    ) => {
      return {
        ...state,
        [modal]: {
          isOpen,
        },
      }
    },
  },
})

export const { actions: modalsActions, reducer: modalsReducer } = modalsSlice

export const modals = (state: TRootState) => state.modals
