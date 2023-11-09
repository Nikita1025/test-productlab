import React from 'react';

// @ts-ignore
import { Image } from 'src/components/images-page/image-page';

import { useGetImagesQuery } from '../../services/images/images-api';

import s from './images-page.module.scss';
export const ImagesPage = () => {
  const { data } = useGetImagesQuery();

  // const images = [
  //   { id: 1, text: 'dasdasdasdas', title: '23', image: ImageIcon },
  //   { id: 2, text: 'das', title: '123', image: ImageIcon },
  //   { id: 3, text: '1', title: 'saldasdsdasdas', image: ImageIcon },
  //   { id: 4, text: 's', title: '4', image: ImageIcon },
  //   { id: 5, text: 'ghjghjghjgh', title: 'saldasdsdasdas', image: ImageIcon },
  //   { id: 6, text: 'dasdadassdasdas', title: 'saldasdsdasdas', image: ImageIcon },
  //   { id: 7, text: 'zcxzxczxcz', title: '76', image: ImageIcon },
  // ];
  console.log(data);

  return (
    <div className={s.container}>
      {data?.img?.map(el => <Image key={el.id} image={el.img} id={el.id} />)}
    </div>
  );
};
