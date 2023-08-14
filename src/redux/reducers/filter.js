import { createSlice } from "@reduxjs/toolkit";

const initialState = 'all';

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (_, action)=> action.payload
        
    }
})

export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer