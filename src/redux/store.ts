import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import queryReducer from "./features/queryParameters/querySlice";


export const store = configureStore({
    reducer: {
        queries: queryReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch