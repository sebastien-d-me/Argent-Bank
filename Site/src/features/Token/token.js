import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: localStorage.getItem("token") || 0
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,

    reducers: {
        getToken: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;
