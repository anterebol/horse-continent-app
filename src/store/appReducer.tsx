import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  something: true,
  modal: false,
  load: true,
  modalType: '',
  image: 0,
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
      if (!state.load) state.load = true;
    },
    loadedPage: (state) => {
      if (state.load) state.load = false;
    },
    chengeModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.image = action.payload.image;
    },
  },
});
export default appSlice.reducer;
export const { firstReducer, openModal, loadPage, loadedPage, chengeModal } = appSlice.actions;
