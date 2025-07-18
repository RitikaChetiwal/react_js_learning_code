import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
    reset: (state) => {
        state.value = 0;
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = Counterslice.actions

export default Counterslice.reducer
