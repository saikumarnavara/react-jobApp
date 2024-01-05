
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../service/apiUrls";
const initialState = {
    loading: false,
    error: null,
    success: false,
    user: null,
};

export const registerUserAPI = createAsyncThunk(
    "register/registerUser",
    async (registerDetails, thunkAPI) => {
        const response = await fetch(registerUser.url, {
            method: registerUser.reqType,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerDetails),
        });
        const data = await response.json();
        if (response.status === 200) {
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }
    }
);

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: {
        [registerUserAPI.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUserAPI.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
        },
        [registerUserAPI.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default registerSlice.reducer;


