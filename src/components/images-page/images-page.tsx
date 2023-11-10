import React from 'react';

import { SnackbarInfo } from 'src/common/errorSnackbar';
import { Image } from 'src/components/images-page/image-page';
import { SkeletonImage } from 'src/components/ui/skeletons/skeleton-images';
import { useGetImagesQuery } from 'src/services/images';

import s from './images-page.module.scss';
export const ImagesPage = () => {
  const { data, isError, isSuccess, isLoading } = useGetImagesQuery();

  return (
    <div>
      {isError || isSuccess ? <SnackbarInfo /> : ''}
      {isLoading && <SkeletonImage />}

      <div className={s.container}>
        {data?.img?.map(el => <Image key={el.id} image={el.img} id={el.id} />)}
      </div>
    </div>
  );
};
