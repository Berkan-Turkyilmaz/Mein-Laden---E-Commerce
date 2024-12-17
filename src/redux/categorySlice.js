import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}


export const getCategories = createAsyncThunk("category", async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  });

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    },
});

export default categorySlice.reducer