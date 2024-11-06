import { configureStore }  from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice';

export const store = configureStore({
    reducer:{
        tasks:taskReducer, // Include your other reducers here if needed. 
    }
});
