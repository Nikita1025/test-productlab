import React from 'react';

import { Image } from 'src/components/images-page/image-page';
import { useGetImagesQuery } from 'src/services/images/images-api';

import s from './images-page.module.scss';
export const ImagesPage = () => {
  const { data } = useGetImagesQuery();

  return (
    <div className={s.container}>
      {data?.img?.map(el => <Image key={el.id} image={el.img} id={el.id} />)}
    </div>
  );
};
