import { createSlice } from "@reduxjs/toolkit";

const user = null

export const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        userLogin: (state, action) => {
            state = action.payload
        },
        userLogout: (state) => {
            state = null
        }
    }
})


export const { userLogin, userLogout } = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer;