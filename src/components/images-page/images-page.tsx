import React from 'react';

// @ts-ignore
import ImageIcon from 'src/assets/icon/image.jpg';
import { Image } from 'src/components/images-page/image-page';

import s from './images-page.module.scss';
export const ImagesPage = () => {
  const images = [
    { id: 1, text: 'dasdasdasdas', title: '23', image: ImageIcon },
    { id: 2, text: 'das', title: '123', image: ImageIcon },
    { id: 3, text: '1', title: 'saldasdsdasdas', image: ImageIcon },
    { id: 4, text: 's', title: '4', image: ImageIcon },
    { id: 5, text: 'ghjghjghjgh', title: 'saldasdsdasdas', image: ImageIcon },
    { id: 6, text: 'dasdadassdasdas', title: 'saldasdsdasdas', image: ImageIcon },
    { id: 7, text: 'zcxzxczxcz', title: '76', image: ImageIcon },
  ];

  return (
    <div className={s.container}>
      {images.map((el, index) => (
        <Image key={el.id} image={el.image} id={el.id} text={el.text} title={el.title} />
      ))}
    </div>
  );
};
