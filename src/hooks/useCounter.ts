import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@store/index'

export const useCounterDispatch = useDispatch.withTypes<AppDispatch>()
export const useCounterSelector = useSelector.withTypes<RootState>()