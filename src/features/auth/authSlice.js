import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateUser , checkUser, signOut } from './authAPI';
import { updateUser } from '../user/userAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error:null
};


export const CreateUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response =CreateUser (userData);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async (userId) => {
    const response =signOut (userId);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const  checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = checkUser (loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const  updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    console.log(update)
    const response = updateUser (update);
    return response;
  }
);

export const CreateUserSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
  //   setError: (state, action) => {
  //     state.error = action.payload;
  // }
},

  extraReducers: (builder) => {
    builder
      .addCase(CreateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser=action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })  
       .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      });
     
  
  },
});



// export const { setError } = CreateUserSlice.actions; 

export const selectLoggedInUser= (state) => state.auth.loggedInUser;
export const selectError= (state) => state.auth.error;

export default CreateUserSlice.reducer;
