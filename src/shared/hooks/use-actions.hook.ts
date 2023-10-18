import { bindActionCreators } from '@reduxjs/toolkit'

import { allActions } from '@/shared/presets'

import { useAppDispatch } from '@/shared/hooks'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(allActions, dispatch)
}
