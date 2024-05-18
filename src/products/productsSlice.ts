import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "../store";
import { fetch } from "../api/client";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  status: "idle",
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("/products");
    return response ?? [];
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.status = "success";
      });
  },
});

export default productsSlice.reducer;

export const { selectAll: selectProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state: RootState) => state.products);
