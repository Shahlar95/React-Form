import {configureStore} from "@reduxjs/toolkit";
import nextBackSlice from "./nextBackSlice";

export const store = configureStore({
    reducer:{
        formoperation:nextBackSlice
    }
})