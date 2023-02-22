import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  // name for diff stores
  name: 'counter',
  initialState,
  reducers: {
    // increment action declared here
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// export actions so we can call them in react application
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export reducer to pass it into store "index.js", 
export default counterSlice.reducer