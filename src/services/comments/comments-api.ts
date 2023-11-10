import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  CreateCommentRequestType,
  CreateCommentResponseType,
  GetCommentsResponseType,
} from './comments-api-types';

const token = localStorage.getItem('JWT');

export const commentsApi = createApi({
  reducerPath: 'comment-api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['createComment'],
  endpoints: builder => ({
    getComments: builder.query<GetCommentsResponseType, number>({
      query: id => ({
        method: 'GET',
        url: `comments/${id}`,
        headers: {
          Authorization: `Bearer ${token!}`,
        },
      }),
      providesTags: ['createComment'],
    }),
    createComment: builder.mutation<
      CreateCommentResponseType,
      CreateCommentRequestType & Pick<CreateCommentRequestType, 'id'>
    >({
      query: ({ id, ...data }) => ({
        method: 'POST',
        url: `comments/${id}`,
        body: data,
      }),
      invalidatesTags: ['createComment'],
    }),
  }),
});
export const { useGetCommentsQuery, useCreateCommentMutation } = commentsApi;
