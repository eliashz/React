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
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
