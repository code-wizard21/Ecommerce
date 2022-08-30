import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/products";

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            for(let i=0; i<data.products.length; i++) {
                if(data.products[i].id === action.payload) {
                    state.push(data.products[i])
                }
            }
        },
        removeProductFromCart: (state, action) => {
            console.log(action.payload)
            return state.filter(product => product.id !== action.payload)
        },
        increaseCartQuantity: (state, action) => {
            for(let i=0; i<state.cart.length; i++) {
                if(state[i].id === action.payload.id) {
                    state[i].quantity += 1
                }
            }
        }
    }
})


export const { addProductToCart, removeProductFromCart } = cartSlice.actions

const cartReducer = cartSlice.reducer;

export default cartReducer;