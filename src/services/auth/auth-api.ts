import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginArgsType, LoginResponseType, setErrorMessageAC } from 'src/services';
import { setSubmittingAC } from 'src/services/app-slice';
import { setIsAuth } from 'src/services/auth';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    loginUser: builder.mutation<LoginResponseType, LoginArgsType>({
      query: data => ({
        method: 'POST',
        url: 'login',
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(setSubmittingAC(true));
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem('JWT', data.token);
          dispatch(setIsAuth(true));
          dispatch(setSubmittingAC(false));
        } catch (e: any) {
          dispatch(setSubmittingAC(false));
          dispatch(setErrorMessageAC(e.error.data.message));
        }
      },
    }),
  }),
});
export const { useLoginUserMutation } = authApi;
