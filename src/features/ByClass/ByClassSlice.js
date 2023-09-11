import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchClassesForSubjectAPI } from './ByClassAPI';


export const fetchClassforSubjectsAsync = createAsyncThunk(
  'subjectClasses/fetchClasses',
  async (params) => {
    const { publisherId, publisherName, subjectName } = params;
    const response = await fetchClassesForSubjectAPI(publisherName, publisherId, subjectName);
    // The value we return becomes the `fulfilled` action payload
    // console.log("params", publisherId, publisherName, subjectName)
    // console.log(response);
    return response.classes;
  }
);

export const ClassForSubjectsSlice = createSlice({
  name: 'subjectClasses',
  initialState: {
    status: 'idle',
    classes: [], // Store the fetched classes
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchClassforSubjectsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClassforSubjectsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.classes = action.payload; // Store the fetched classes
      });
  },
});

export const selectClassesForSubject = (state) => state.ClassForSubject.classes;

export default ClassForSubjectsSlice.reducer;