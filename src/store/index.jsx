import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/Userslice";
import amountSlice from "./slices/Amountslice";

const store = configureStore({
    reducer:{
        users: userSlice.reducer,
        amount: amountSlice.reducer
    }
})

export default store