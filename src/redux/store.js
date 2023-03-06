import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import storage from "redux-persist/lib/storage";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
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

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
}

const persistConfig = {
    key: 'root',
    storage,
}

const combinedReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
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

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export const persistor = persistStore(store)