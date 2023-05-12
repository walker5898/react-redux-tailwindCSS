import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../features/CountSlice";

export const store = configureStore({
  reducer: {
    count: CountReducer,
  },
});
