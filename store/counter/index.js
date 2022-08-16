import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  tick: "TICK",
};

// slick 分片
export const counterSlick = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action) {
      state.count = state.count + action.payload;
    },
    dec(state, action) {
      state.count = state.count - action.payload;
    },
    lower(state, action) {
      console.log("action", action);
      state.tick = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });
  },
  // extraReducers: {
  //   [addAsync.fulfilled]: (state, action) => {
  //     state.count = action.payload;
  //   },
  // },
});

export const counterReducer = counterSlick.reducer;

export const { add, dec } = counterSlick.actions;

export const addAsync = createAsyncThunk("counter/addAsync", async (number) => {
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve(number), 3000);
  });
  console.log("promise", data);
  console.log("number", number);
  return data;
});
