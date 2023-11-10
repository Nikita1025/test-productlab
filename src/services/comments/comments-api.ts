import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setErrorMessageAC, setResponseMessageAC, setSubmittingAC } from 'src/services';
import {
  CommentResponseType,
  CreateCommentRequestType,
  DeleteCommentRequestType,
  GetCommentsResponseType,
} from 'src/services/comments';

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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(setSubmittingAC(true));
        try {
          await queryFulfilled;

          dispatch(setSubmittingAC(false));
        } catch (e: any) {
          dispatch(setErrorMessageAC(e.error.data.message));

          dispatch(setSubmittingAC(false));
        }
      },
    }),
    createComment: builder.mutation<
      CommentResponseType,
      CreateCommentRequestType & Pick<CreateCommentRequestType, 'id'>
    >({
      query: ({ id, ...data }) => ({
        method: 'POST',
        url: `comments/${id}`,
        body: data,
        headers: {
          Authorization: `Bearer ${token!}`,
        },
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(setSubmittingAC(true));
        try {
          const { data } = await queryFulfilled;

          dispatch(setResponseMessageAC(data.message!));
          dispatch(setSubmittingAC(false));
        } catch (e: any) {
          dispatch(setErrorMessageAC(e.error.data.message));

          dispatch(setSubmittingAC(false));
        }
      },
    }),
    deleteComment: builder.mutation<
      CommentResponseType,
      DeleteCommentRequestType & Pick<DeleteCommentRequestType, 'imageId'>
    >({
      query: ({ imageId, ...data }) => ({
        method: 'DELETE',
        url: `comments/${imageId}`,
        body: data,
        headers: {
          Authorization: `Bearer ${token!}`,
        },
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        dispatch(setSubmittingAC(true));
        try {
          const { data } = await queryFulfilled;

          dispatch(setResponseMessageAC(data.message!));
          dispatch(setSubmittingAC(false));
        } catch (e: any) {
          dispatch(setErrorMessageAC(e.error.data.message));

          dispatch(setSubmittingAC(false));
        }
      },
    }),
  }),
});
export const { useGetCommentsQuery, useDeleteCommentMutation, useCreateCommentMutation } =
  commentsApi;
