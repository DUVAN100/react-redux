import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:'taks',
    initialState:[],
    reducers:{
        addTask:(state, action)=> { }
    }
});
export default tasksSlice.reducer;

