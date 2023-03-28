import { createSlice } from "@reduxjs/toolkit";

const initialState = {email: null};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.email = action.payload;
        },
        userSignup: (state, action) => {
            state.email = action.payload;
        },
        userLogout: (state, action) => {
            state.email = null;
        }
    }
})


export const { userLogin, userSignup, userLogout } = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer;