import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const muestrasSlice = createSlice({
  name: 'muestras',
  initialState,
  reducers: {
    addMuestra: (state, {payload}) => {
      const new_index = state.length === 0 ? 1 : state.length + 1;
      payload.id = new_index;
      state.unshift(payload);
    },
  },
});

export const {addMuestra} = muestrasSlice.actions;

export default muestrasSlice.reducer;
