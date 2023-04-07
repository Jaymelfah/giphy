import { configureStore, combineReducers } from "@reduxjs/toolkit";
import gifReducer from './gif';

const rootReducer = combineReducers({
    gifs: gifReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;