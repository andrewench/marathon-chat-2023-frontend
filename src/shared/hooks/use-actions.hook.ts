import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppDispatch } from '@/shared/hooks'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators({}, dispatch)
}
