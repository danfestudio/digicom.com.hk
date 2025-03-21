// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
// import storage from 'redux-persist/lib/storage/session'; // or use "sessionStorage" for session storage
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { sidebarSlice } from './features/sidebarSlice';
import { eventSlice } from './features/eventSlice';
import { authSlice } from './features/authSlice';
import { loaderSlice } from './features/loaderSlice';
import { addressSlice } from './features/addressSlice';

import { scheduleSlice } from './features/scheduleSlice';
import { schoolSlice } from './features/schoolSlice';
import { skeletonSlice } from './features/skeletonSlice';
import { bannerSlice } from './features/bannerSlice';
import { blogSlice } from './features/blogSlice';
import { testimonialSlice } from './features/testimonialSlice';
import { preferenceSlice } from './features/preferenceSlice';
import { CustomStyleSlice } from './features/CustomStyleSlice'
import { mediaSlice } from './features/mediaSlice';
import { categorySlice } from './features/categorySlice';
import { productSlice } from './features/productSlice';
import { policySlice } from './features/policySlice';


const rootReducer = combineReducers({
  sidebarSlice: sidebarSlice.reducer,
  eventSlice: eventSlice.reducer,
  authSlice: authSlice.reducer,
  loaderSlice: loaderSlice.reducer,
  scheduleSlice: scheduleSlice.reducer,
  addressSlice: addressSlice.reducer,
  schoolSlice: schoolSlice.reducer,
  skeletonSlice: skeletonSlice.reducer,
  bannerSlice: bannerSlice.reducer,
  blogSlice: blogSlice.reducer,
  testimonialSlice: testimonialSlice.reducer,
  preferenceSlice: preferenceSlice.reducer,
  customStyleSlice: CustomStyleSlice.reducer,
  categorySlice: categorySlice.reducer,
  productSlice: productSlice.reducer,
  mediaSlice: mediaSlice.reducer,
  policySlice: policySlice.reducer,
});

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: 'root', // This key determines where the state will be saved in storage.
  // blacklist: ['addressSlice'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
