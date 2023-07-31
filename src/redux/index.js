import { configureStore } from "@reduxjs/toolkit";
import productDetailReducer from "./productDetail/reducer";
import allProductReducer from "./products/reducer";
import authUserReducer from "./auth/reducer";

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    allProduct: allProductReducer,
    auth: authUserReducer,
  },
});

export default store;
