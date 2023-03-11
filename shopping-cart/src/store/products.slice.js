import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      return console.error(error);
    }
  }
);

const initialState = {
  products: [],
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isLoading = false;
    });
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
