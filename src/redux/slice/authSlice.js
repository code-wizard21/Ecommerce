import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => action.payload,
        userSignup: (state, action) => action.payload,
        userLogout: () => null
    }
})


export const { userLogin, userSignup, userLogout } = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer;