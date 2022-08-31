import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/products";

const initialState = []

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addProductToWishlist: (state, action) => {
            for(let i=0; i<data.products.length; i++) {
                if(data.products[i].id === action.payload) {
                    state.push(data.products[i])
                }
            }
        },
        removeProductFromWishlist: (state, action) => {
            console.log(action.payload)
            return state.filter(product => product.id !== action.payload)
        },
        increaseWishlistQuantity: (state, action) => {
            for(let i=0; i<state.wishlist.length; i++) {
                if(state[i].id === action.payload.id) {
                    state[i].quantity += 1
                }
            }
        }
    }
})


export const { addProductToWishlist, removeProductFromWishlist } = wishlistSlice.actions

const wishlistReducer = wishlistSlice.reducer;

export default wishlistReducer;