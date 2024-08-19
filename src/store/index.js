import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { moviesApi } from "./CardSlice";


export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userSlice.middleware, moviesApi.middleware);
  },
});

export default store;