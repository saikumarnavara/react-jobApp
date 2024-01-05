import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../service/apiUrls";
import Cookies from 'js-cookie'
export const loginAPI = createAsyncThunk(
    'login/login',
    async (payload) => {
        const response = await fetch(loginUser.url, {
            method: loginUser.reqType,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json();
        Cookies.set('token', data.token)
        return data;
    }
)
const initialState = {
    loading: false,
    error: false,
    success: false,
    user: {},
    token: {}
}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [loginAPI.pending]: (state, action) => {
            state.loading = true
        },
        [loginAPI.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.user = action.payload
            state.token = action.payload.token
        },
        [loginAPI.rejected]: (state, action) => {
            state.loading = false
            state.error = true
        }
    }

})
export default loginSlice.reducer



