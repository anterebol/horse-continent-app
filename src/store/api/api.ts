import { createAsyncThunk } from '@reduxjs/toolkit';
import { reviewUrl } from '../../constants/url';
import { ReviewType } from '../../types/reviewType';
import { POST, GET, PUT, DELETE } from '../../constants/methods';
const headers = {
  accept: 'application/json',
  'content-type': 'application/json',
};

export const addReview = createAsyncThunk(
  'addReview',
  async (action: ReviewType, { rejectWithValue }) => {
    try {
      const data = await fetch(reviewUrl, {
        method: POST,
        headers: headers,
        body: JSON.stringify(action),
      }).then(async (res) => {
        if (!res.ok) {
          throw new Error(res.status.toString());
        } else {
          return await res.text().then((res) => JSON.parse(res));
        }
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getAllReviews = createAsyncThunk('getAllReviews', async (_, { rejectWithValue }) => {
  try {
    const data = await fetch(reviewUrl, {
      method: GET,
      headers: headers,
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error(res.status.toString());
      } else {
        return await res.text().then((res) => JSON.parse(res));
      }
    });
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
