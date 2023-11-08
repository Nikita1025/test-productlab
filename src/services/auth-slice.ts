import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'src/services/auth-api-types';

type AuthState = {
  user: UserType | null;
  isAuth: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const slice = createSlice({
  initialState,

  name: 'auth',
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const authReducer = slice.reducer;

export const { setUser, setIsAuth } = slice.actions;
