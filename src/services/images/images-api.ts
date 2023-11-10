import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetImagesResponseType } from './images-api-types';

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
    }),
  }),
});
export const { useGetImagesQuery } = imagesApi;
