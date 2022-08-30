import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/products";

const initialState = data.products

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.filter(product => product.id !== action.payload.id)
        }
    }
})


export const { addProduct, removeProduct } = productsSlice.actions

const productsReducer = productsSlice.reducer;

export default productsReducer;