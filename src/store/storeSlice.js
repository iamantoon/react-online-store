import {createSlice} from '@reduxjs/toolkit';
import allProducts from './../helpers/allProducts';

const storeSlice = createSlice({
    name: 'products',
    initialState: {
        products: allProducts
    },
    reducers: {
        sortProducts(state, action) {
            if (action.payload.sort === 'price-ascending') {
                state.products = state.products.sort((a, b) => a['price'] - b['price']);
            } else if (action.payload.sort === 'price-descending') {
                state.products = state.products.sort((a, b) => b['price'] - a['price']);
            } else if (action.payload.sort === 'title') {
                state.products = state.products.sort((a, b) => a[action.payload.sort].localeCompare(b[action.payload.sort]));
            } else if (action.payload.sort === 'id') {
                state.products = state.products.sort((a, b) => a[action.payload.sort] - b[action.payload.sort]);
            }
        },
        addToProductCart(state, action) {
            const toggledProduct = state.products.find(product => product.id === action.payload.id);
            toggledProduct.cart = !toggledProduct.cart;
        },
        deleteProduct(state, action) {
            const removedProduct = state.products.find(product => product.id === action.payload.id);
            removedProduct.cart = false;
        }
    }
});

export const {sortProducts, addToProductCart, deleteProduct} = storeSlice.actions;
export default storeSlice.reducer;