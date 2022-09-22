import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        userLogin: (state, action) => {
            state.push(action.payload)
        },
        userLogout: (state, action) => {
            state = null
        }
    }
})


export const { userLogin, userLogout } = userSlice.actions

const userReducer = userSlice.reducer;

export default userReducer;