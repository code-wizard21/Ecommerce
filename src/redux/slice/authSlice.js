import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state = action.payload;
        },
        userSignup: (state, action) => {
            state = action.payload;
        },
        userLogout: (state, action) => {
            state = null;
        }
    }
})


export const { userLogin, userSignup, userLogout } = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer;