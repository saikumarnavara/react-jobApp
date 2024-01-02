import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getEmpDetails } from "../../service/apiUrls";
const initialState = {
    emp: [],
    status: null,
};

export const getEmpDetailApi = createAsyncThunk(
    "getEmpDetailApi", async () => {
        try {
            const response = await axios.get(getEmpDetails.url);
            return response.data;
        }
        catch (err) {
            console.log(err);
        }
    }

);


const getEmpSlice = createSlice({
    name: "getEmp",
    initialState,
    reducers: {
        getEmpSuccess: (state, action) => {
            state.emp = action.payload;
            state.status = "success";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEmpDetailApi.pending, (state) => {
            state.status = "loading";
        })
            .addCase(getEmpDetailApi.fulfilled, (state, action) => {
                state.emp = action.payload;
                state.status = "success";
            })
            .addCase(getEmpDetailApi.rejected, (state) => {
                state.status = "failed";
            })
    }

});


export const { getEmpSuccess } = getEmpSlice.actions;
export default getEmpSlice.reducer;


