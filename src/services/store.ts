import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authApi } from './auth/auth-api';
import { authReducer } from './auth/auth-slice';
import { imagesApi } from './images/images-api';

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [imagesApi.reducerPath]: imagesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware]).concat([imagesApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
