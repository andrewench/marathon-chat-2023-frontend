import { useAppSelector } from '@/shared/hooks'

import { selectedStore } from '@/store'

export const useMultipleSelector = () => {
  const state = useAppSelector(selectedStore)

  return state
}
