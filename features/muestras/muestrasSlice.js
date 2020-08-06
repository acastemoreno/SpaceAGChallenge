import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const muestrasSlice = createSlice({
  name: 'muestras',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

export const {increment} = muestrasSlice.actions;

export default muestrasSlice.reducer;
