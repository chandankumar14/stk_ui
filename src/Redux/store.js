import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReduce from "./userSlice"
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        user:userReduce
    },
});

export default store