import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart,fetchItemByUserId ,updateCart, deleteItemFromCart} from './CartAPI';

const initialState = {
 items:[],
  status: 'idle',
};


export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    console.log(item.user)
    const response = await addToCart(item);
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const fetchItemByUserIdAsync = createAsyncThunk(
  'cart/fetchItemByUserId',
  async (userId) => {
    // console.log(item.user)
    const response = await fetchItemByUserId(userId);
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    console.log(response)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const addToCartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.find(item => item.productId === action.payload.productId);

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item is not in the cart, add it
        state.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log('Item added:', action.payload);
        state.items.push( action.payload);
      })
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log('Item added:', action.payload);
        state.items=action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
<<<<<<< Updated upstream
     const index= state.items.findIndex((item=>item.id===action.payload.id))
=======
      const index= state.items.findIndex((item=>item.id == action.payload.id))
>>>>>>> Stashed changes
        state.items[index]=action.payload;
      }).addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
     const index= state.items.findIndex((item=>item.id===action.payload.id))
        state.items.splice(index, 1);
      });
  },
});

export const { } = addToCartSlice.actions;


export const selectItems = (state) => state.cart.items;

export default addToCartSlice.reducer;
