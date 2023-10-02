import { store } from '../../store'

export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
