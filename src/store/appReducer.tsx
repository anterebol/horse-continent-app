import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  something: true,
  modal: false,
  load: true,
  modalType: 'contacts',
  image: 0,
  hoveredStars: 0,
  choisesStars: 0,
  pageOfReviews: 1,
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
    openNextReviews: (state, action) => {
      if (state.pageOfReviews < action.payload.maxPage) {
        state.pageOfReviews++;
      }
    },
    openPrevReviews: (state) => {
      if (state.pageOfReviews > 2) {
        state.pageOfReviews--;
      }
    },
    openSpecificReviews: (state, action) => {
      state.pageOfReviews = action.payload.page;
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
  openNextReviews,
  openPrevReviews,
  openSpecificReviews,
} = appSlice.actions;
