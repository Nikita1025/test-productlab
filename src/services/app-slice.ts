import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppRootStateType } from './store';

export type InitialStateType = {
  responseMessage: null | string;
  isLoading: boolean;
  errorMessage: null | string;
};

const initialState: InitialStateType = {
  responseMessage: null as string | null,
  isLoading: false,
  errorMessage: null as string | null,
};

const slice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setErrorMessageAC(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    },
    setResponseMessageAC(state, action: PayloadAction<string | null>) {
      state.responseMessage = action.payload;
    },
    setSubmittingAC(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const appReducer = slice.reducer;
export const { setResponseMessageAC, setErrorMessageAC, setSubmittingAC } = slice.actions;
export const appResponseMessageSelector = (state: AppRootStateType) =>
  state.app.responseMessage;
export const appStatusSelector = (state: AppRootStateType) => state.app.isLoading;
export const appErrorMessageSelector = (state: AppRootStateType) =>
  state.app.errorMessage;
