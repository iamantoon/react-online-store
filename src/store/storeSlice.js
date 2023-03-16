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
            const toggledProduct = state.products.find(product => product.id === Number(action.payload.id));
            toggledProduct.cart = !toggledProduct.cart;
        },
        deleteProduct(state, action) {
            const removedProduct = state.products.find(product => product.id === action.payload.id);
            removedProduct.cart = false;
        },
        changeValueByInput(state, action) {
            const changedProduct = state.products.find(product => product.id === action.payload.id);
            changedProduct.count = action.payload.value;
            changedProduct.totalPrice = changedProduct.price * action.payload.value;
        },
        increaseCount (state, action) {
            const increasedValue = state.products.find(product => product.id === action.payload.id);
            increasedValue.count = increasedValue.count + 1;
            increasedValue.totalPrice = increasedValue.count * increasedValue.price;
        },
        decreaseCount (state, action) {
            const decreasedValue = state.products.find(product => product.id === action.payload.id);
            if (decreasedValue.count > 1) {
                decreasedValue.count = decreasedValue.count - 1;
                decreasedValue.totalPrice = decreasedValue.count * decreasedValue.price;
            } else {
                decreasedValue.cart = false;
            }
        },
        addToWishlist (state, action) {
            const wishedProduct = state.products.find(product => product.id === action.payload.id);
            wishedProduct.wishlist = !wishedProduct.wishlist;
        }
    }
});

export const {sortProducts, addToProductCart, deleteProduct, changeValueByInput, increaseCount, decreaseCount, addToWishlist} = storeSlice.actions;
export default storeSlice.reducer;