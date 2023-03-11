import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../constants";

const getUrl = (skip = 0, limit = 9) => {
  console.log("skip", skip);
  return `${url.products}?skip=${skip}&limit=${limit}`;
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (skip, thunkAPI) => {
    try {
      console.log(getUrl(skip));
      const res = await fetch(getUrl(skip));
      const data = await res.json();
      console.log(data);
      return data.products;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Something wetn wrong.");
    }
  }
);

const initialState = {
  data: [],
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.data = [...state.data, ...action.payload];
        console.log("AP", action.payload);
        action.payload.forEach((product) => {
          if (!state.categories.includes(product.category))
            state.categories.push(product.category);
        });
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
