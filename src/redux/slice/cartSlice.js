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
                    let newProduct = data.products[i]
                    state.unshift(newProduct)
                }
            }
        },
        removeProductFromCart: (state, action) => {
            console.log(action.payload)
            return state.filter(product => product.id !== action.payload)
        },
        increaseCartQuantity: (state, action) => {
            for(let i=0; i<state.length; i++) {
                if(state[i].id === action.payload) {
                    if(state[i].quantity > 1) {
                        state[i].quantity++
                    }
                    else {
                        state[i].quantity = 2
                    }
                }
            }
        },
        decreaseCartQuantity: (state, action) => {
            for(let i=0; i<state.length; i++) {
                if(state[i].id === action.payload) {
                    if(state[i].quantity < 1) {
                        state[i].quantity = 1
                    }
                    else {
                        state[i].quantity--
                    }
                }
            }
        }
    }
})


export const { addProductToCart, removeProductFromCart, increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions

const cartReducer = cartSlice.reducer;

export default cartReducer;