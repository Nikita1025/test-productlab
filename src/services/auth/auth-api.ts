import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LoginArgsType } from './auth-api-types';
import { setIsAuth, setUser } from './auth-slice';
const baseUrl = '/';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    loginUser: builder.mutation<any, LoginArgsType>({
      query: data => ({
        method: 'POST',
        url: 'login',
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem('JWT', data.token);
          dispatch(setIsAuth(true));
          dispatch(setUser(data.userId));
        } catch (e) {
          console.error(e);
        }
      },
    }),
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
  }),
});
export const { useGetUsersQuery, useLoginUserMutation } = authApi;
