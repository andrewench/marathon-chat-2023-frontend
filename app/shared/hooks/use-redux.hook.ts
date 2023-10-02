import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatchType, RootStateType } from '@/shared/types'

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
