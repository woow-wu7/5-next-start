import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/index";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
