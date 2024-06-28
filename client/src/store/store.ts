
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./apli.slice";
// import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
    key: "root",
    storage,
};
const reducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            apiSlice.middleware,
        ),
    devTools: import.meta.env.MODE === "development",
});
// export const persistor = persistStore(store);
// setupListeners(store.dispatch)
