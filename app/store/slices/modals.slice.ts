import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TRootState } from '@/shared/types'

interface IState {
  logout: {
    isOpen: boolean
  }
  upload: {
    isOpen: boolean
  }
}

const initialState: IState = {
  logout: {
    isOpen: false,
  },
  upload: {
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
      }: PayloadAction<{ modal: keyof IState; isOpen: boolean }>,
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
