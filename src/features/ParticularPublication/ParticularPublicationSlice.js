import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSubjectsForPublisherAPI } from './ParticularPublicationAPI';


const initialState = {
  subjects: [], // Initialize subjects as an empty array
  status: 'idle',
  error: null,
};

export const fetchSubjectsForPublisher = createAsyncThunk(
  'publication/fetchSubjectsForPublisher',
  async (publisherId) => {
    try {
      const response = await fetchSubjectsForPublisherAPI(publisherId);
      // console.log(response.data);
      return response.data.subjects;
      // Assuming that fetchSubjectsForPublisherAPI returns an array of subjects
    } catch (error) {
      throw new Error('Failed to fetch subjects for the publisher');
    }
  }
);

export const particularPublicationSlice = createSlice({
  name: 'publication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjectsForPublisher.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSubjectsForPublisher.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subjects = action.payload;
      })
      .addCase(fetchSubjectsForPublisher.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectSubjects = (state) => state.particularPublication.subjects;
export const selectPublicationStatus = (state) => state.particularPublication.status;
export const selectPublicationError = (state) => state.particularPublication.error;

export default particularPublicationSlice.reducer;