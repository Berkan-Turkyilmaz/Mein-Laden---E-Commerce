import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { status } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: status.IDLE,
  productDetails: [],
  productDetailsStatus: status.IDLE,
};
export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data;
});
export const getProductDetails = createAsyncThunk(
  "getproductdetails ",
  async (id) => {
    const response = await fetch(`/products/${id}`);
    const data = await response.json();
    return data;
  }
);
export const getProductsByCategory = createAsyncThunk(
  "getproductsbycategory ",
  async (category) => {
    const response = await fetch(`http://localhost:3000/products/categories/${category}`);
    const data = await response.json();
    return data;
  }
) 

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsStatus = status.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = status.SUCCEEDED;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.productsStatus = status.FAILED;
    });
    builder.addCase(getProductDetails.pending, (state) => {
      state.productDetailsStatus = status.LOADING;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.productDetailsStatus = status.SUCCEEDED;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.productDetailsStatus = status.FAILED;
    });
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.productsStatus = status.LOADING;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = status.SUCCEEDED;
    });
    builder.addCase(getProductsByCategory.rejected, (state) => {
      state.productsStatus = status.FAILED;
    });
  },
});

export default productSlice.reducer;
