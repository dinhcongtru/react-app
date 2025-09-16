import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/modules/counter/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

store.subscribe(() => {
  const { value } = store.getState().counter
  localStorage.setItem('counter', JSON.stringify(value))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
