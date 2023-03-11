import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(url.products);
      const data = await res.json();
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
        state.data = action.payload;
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
