import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginArgsType } from 'src/services';
import { setResponseMessageAC, setSubmittingAC } from 'src/services/app-slice';
import { setIsAuth } from 'src/services/auth';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    loginUser: builder.mutation<any, LoginArgsType>({
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
          dispatch(setResponseMessageAC(data.message));
        } catch (e) {
          dispatch(setSubmittingAC(false));
        }
      },
    }),
  }),
});
export const { useLoginUserMutation } = authApi;
