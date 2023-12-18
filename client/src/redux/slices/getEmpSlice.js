import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getEmpDetails } from "../../service/apiUrls";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    emp: [],
    status: null,
};

// async function getEmpDetailApi() {
//     try {
//         const response = await axios.get(getEmpDetails.url);
//         return response.data;
//     } catch (err) {
//         console.log(err);
//     }
// }

export const getEmpDetailApi = createAsyncThunk(
    "getEmpDetailApi",
    async () => {
        const response = await axios.get(getEmpDetails.url);
        return response.data;
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
    extraReducers: {
        [getEmpDetailApi.pending]: (state, action) => {
            state.status = "loading";
        }
        ,
        [getEmpDetailApi.fulfilled]: (state, action) => {
            state.emp = action.payload;
            state.status = "success";
        }
        ,
        [getEmpDetailApi.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
});

export const { getEmpSuccess } = getEmpSlice.actions;
export default getEmpSlice.reducer;


