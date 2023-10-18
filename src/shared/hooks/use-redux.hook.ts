import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { TAppDispatch, TRootState } from '@/shared/types'

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
