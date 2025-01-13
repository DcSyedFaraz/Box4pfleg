// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import progressReducer from './progressSlice';
import productsReducer from './productsSlice';

const store = configureStore({
    reducer: {
        progress: progressReducer,
        products: productsReducer,
    },
});

export default store;
