import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import storage from "redux-persist/lib/storage";
import "firebase/auth";
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import cartReducer from "./slice/cartSlice";
import wishlistReducer from "./slice/wishlistSlice";
import userReducer from "./slice/authSlice";


const persistConfig = {
    key: 'root',
    storage,
}

const combinedReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
})


const persistedReducer = persistReducer(persistConfig, combinedReducers)


export const store = configureStore({
    reducer: {
        data: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions : [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
        }
    })
})

export const persistor = persistStore(store)