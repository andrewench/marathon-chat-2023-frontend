import { appActions, modalsActions, userActions } from '@/store/slices'

export const allActions = {
  ...appActions,
  ...userActions,
  ...modalsActions,
}
