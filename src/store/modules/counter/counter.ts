import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';

const initialValue = Number(localStorage.getItem('counter') || 0);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: initialValue,
  },
  reducers: {
    increment: state => {
      if (state.value === 20) return;
      state.value += 1;
    },
    decrement: state => {
      if (state.value === 0) return;
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
