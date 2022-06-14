import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/token/token";


export const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
});