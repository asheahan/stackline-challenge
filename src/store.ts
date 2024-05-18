import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
