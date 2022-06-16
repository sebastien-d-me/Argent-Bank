import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: ""
};

export const firstNameSlice = createSlice({
    name: "firstName",
    initialState,

    reducers: {
        getFirstName: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { getFirstName } = firstNameSlice.actions;
export default firstNameSlice.reducer;