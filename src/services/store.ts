import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { appReducer } from './app-slice';
import { authApi, authReducer } from './auth';
import { commentsApi } from './comments';
import { imagesApi } from './images';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  [authApi.reducerPath]: authApi.reducer,
  [imagesApi.reducerPath]: imagesApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat([authApi.middleware])
      .concat([imagesApi.middleware])
      .concat([commentsApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
