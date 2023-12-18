import { configureStore } from "@reduxjs/toolkit";
import getEmpSlice from "../slices/getEmpSlice";

export const store = configureStore({
    reducer: {
        getEmployees: getEmpSlice,
    },
});

