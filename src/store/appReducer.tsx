import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  something: true,
  modal: false,
  load: true,
  modalType: 'contacts',
  image: 0,
  hoveredStars: 0,
  choisesStars: 0,
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
    hovereStars: (state, action) => {
      state.hoveredStars = action.payload;
    },
    choiseStars: (state, action) => {
      state.choisesStars = action.payload;
    },
  },
});
export default appSlice.reducer;
export const {
  firstReducer,
  openModal,
  loadPage,
  loadedPage,
  chengeModal,
  hovereStars,
  choiseStars,
} = appSlice.actions;
