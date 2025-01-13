import { createSlice } from '@reduxjs/toolkit';

// Initial state with the list of products
const initialState = {
    products: [
        { id: 1, name: 'Bettschutzeinlage', percentage: 31, quantity: 0, max: 5, uri: 'https://box4pflege.de/wp-content/uploads/2022/05/Icons_Bed-Protection-Pads-1-150x150.png' },
        { id: 2, name: 'Desinfektionstücher', percentage: 18, quantity: 0, max: 5, uri: 'https://box4pflege.de/wp-content/uploads/2022/05/Icons_Disposable-gloves-1-100x100.png' },
        { id: 3, name: 'Einmalhandschuhe', percentage: 24, quantity: 0, max: 5, uri: 'https://box4pflege.de/wp-content/uploads/2022/05/Icons_-Fingerlings-1-150x150.png' },
        { id: 4, name: 'FFP2 Masken', percentage: 11, quantity: 0, max: 5, uri: 'https://box4pflege.de/wp-content/uploads/2022/05/Icons_Disinfection-Liquid-1-150x150.png' },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity < product.max) {
                product.quantity += 1;
            }
        },
        removeProduct: (state, action) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product && product.quantity > 0) {
                product.quantity -= 1;
            }
        },
        // Optional: Reset all products to their initial state
        resetProducts: (state) => {
            state.products.forEach(product => {
                product.quantity = 0;
            });
        },
    },
});

export const { addProduct, removeProduct, resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
