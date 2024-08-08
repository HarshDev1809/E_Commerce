import { configureStore } from "@reduxjs/toolkit";
import shoppingBagReducer from './features/ShoppingBag/ShoppingBagSlice'

const store = configureStore({
    reducer : {
        shoppingBag : shoppingBagReducer,
    },
});

export default store;