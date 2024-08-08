import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const getCartItems = createAsyncThunk("cart/getItems", async () => {
  try {
    const response = await axios.get(`${URL}`);
    console.log(response);
    return response.data;
  } catch (err) {
    return err;
  }
});

const shoppingBagSlice = createSlice({
  name: "Shopping Bag",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        console.log("Fetching posts pending...");
        state.status = "loading";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log("Fetching posts fulfilled:", action.payload);
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.error("Fetching posts rejected:", action.payload);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default shoppingBagSlice.reducer;
