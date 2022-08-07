import { ReviewType } from './../types/reviewType';
import { createSlice } from '@reduxjs/toolkit';
import { addReview, getAllReviews } from './api/api';

const apiState = {
  loadedBack: true,
  reviews: [] as ReviewType[],
  status: true,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState: { ...apiState },
  reducers: {},
  extraReducers: {
    [addReview.fulfilled.type]: (state, action: { payload: ReviewType }) => {
      state.loadedBack = true;
      state.reviews.push({ ...action.payload });
    },
    [addReview.pending.type]: (state, action) => {
      state.loadedBack = false;
    },
    [addReview.rejected.type]: (state, action) => {
      console.log(action);
    },
    [getAllReviews.fulfilled.type]: (state, action: { payload: ReviewType[] }) => {
      state.loadedBack = true;
      state.reviews = [...action.payload];
    },
    [getAllReviews.pending.type]: (state) => {
      state.loadedBack = false;
    },
  },
});

export default apiSlice.reducer;
