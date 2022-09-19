import { ReviewType } from './../types/reviewType';
import { createSlice } from '@reduxjs/toolkit';
import { addReview, getAllEvents, getAllReviews } from './api/api';
import { EventType } from '../types/eventType';

const apiState = {
  loadedBack: true,
  reviews: [] as ReviewType[],
  events: [] as EventType[],
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
      state.reviews = [...action.payload];
      state.loadedBack = true;
    },
    [getAllReviews.pending.type]: (state) => {
      state.loadedBack = false;
    },
    [getAllEvents.fulfilled.type]: (state, action: { payload: EventType[] }) => {
      console.log(action.payload);
      state.events = [...action.payload];
      state.loadedBack = true;
    },
    [getAllEvents.pending.type]: (state) => {
      state.loadedBack = false;
    },
  },
});

export default apiSlice.reducer;
