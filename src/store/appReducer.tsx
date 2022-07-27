import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  something: true,
  modal: false,
  load: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState: { ...initialState },
  reducers: {
    firstReducer: (state) => {
      state.something = !state.something;
    },
    openModal: (state) => {
      state.modal = !state.modal;
    },
    loadPage: (state) => {
      state.load = true;
      // setTimeout(() => (state.load = true), 1000);
    },
    loadedPage: (state) => {
      state.load = false;
      // setTimeout(() => (state.load = false), 1000);
    },
  },
});
export default appSlice.reducer;
export const { firstReducer, openModal, loadPage, loadedPage } = appSlice.actions;
