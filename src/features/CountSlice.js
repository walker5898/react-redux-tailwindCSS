import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};
const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.number += action.payload;
    },
    decrement: (state, action) => {
      state.number -= action.payload;
    },
    pow: (state, action) => {
      state.number *= action.payload;
    },
    divide: (state, action) => {
      state.number /= action.payload;
    },
  },
});

export const { increment, decrement, pow, divide } = countSlice.actions;
export default countSlice.reducer;
