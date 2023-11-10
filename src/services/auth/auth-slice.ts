import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: false,
};

const slice = createSlice({
  initialState,

  name: 'auth',
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const authReducer = slice.reducer;

export const { setIsAuth } = slice.actions;
