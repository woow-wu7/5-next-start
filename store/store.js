import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/index";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
