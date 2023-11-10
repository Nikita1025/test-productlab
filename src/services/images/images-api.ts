import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setErrorMessageAC, setResponseMessageAC, setSubmittingAC } from 'src/services';
import { GetImagesResponseType } from 'src/services/images';

const token = localStorage.getItem('JWT');

export const imagesApi = createApi({
  reducerPath: 'image-api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getImages: builder.query<GetImagesResponseType, void>({
      query: () => ({
        method: 'GET',
        url: 'images',
        headers: {
          Authorization: `Bearer ${token!}`,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
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
export const { useGetImagesQuery } = imagesApi;
