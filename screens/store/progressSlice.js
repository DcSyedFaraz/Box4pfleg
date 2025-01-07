// store/progressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, // Initialize progress as integer (0-100)
};

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        setProgress: (state, action) => {
            // Ensure progress stays within 0-100
            state.value = Math.min(Math.max(action.payload, 0), 100);
        },
        resetProgress: (state) => {
            state.value = 0;
        },
    },
});

export const { setProgress, resetProgress } = progressSlice.actions;

export default progressSlice.reducer;
