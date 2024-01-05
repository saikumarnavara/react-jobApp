import { configureStore } from "@reduxjs/toolkit";
import getEmpSlice from "../slices/getEmpSlice";
import registerSlice from "../slices/register-slice";
import loginSlice from "../slices/login-slice";
export const store = configureStore({
    reducer: {
        getEmployees: getEmpSlice,
        register: registerSlice,
        login: loginSlice,
    },
});

