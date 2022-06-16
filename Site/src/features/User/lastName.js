import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: ""
};

export const lastNameSlice = createSlice({
    name: "lastName",
    initialState,

    reducers: {
        getLastName: (state, action) => {
            state.value = action.payload;
        },
    },
});


export const { getLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;