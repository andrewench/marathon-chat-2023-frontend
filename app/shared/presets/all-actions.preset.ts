import { appActions, userActions } from '@/store/slices'

export const allActions = {
  ...appActions,
  ...userActions,
}
