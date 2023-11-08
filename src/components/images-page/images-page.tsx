import React from 'react';

// @ts-ignore
import Image from 'src/assets/icon/image.jpg';
import { Card } from 'src/components/ui/card-temporary';
import { Typography } from 'src/components/ui/typography';

import s from './images-page.module.scss';
export const ImagesPage = () => {
  const images = [
    { id: 1, text: 'dasdasdasdas', image: Image },
    { id: 2, text: 'das', image: Image },
    { id: 3, text: '1', image: Image },
    { id: 4, text: 's', image: Image },
    { id: 5, text: 'ghjghjghjgh', image: Image },
    { id: 6, text: 'dasdadassdasdas', image: Image },
    { id: 7, text: 'zcxzxczxcz', image: Image },
  ];

  return (
    <div className={s.container}>
      {images.map((el, index) => (
        <Card key={index} className={s.card}>
          <img src={el.image} className={s.image} />
          <Typography variant="large">{el.text}</Typography>
        </Card>
      ))}
    </div>
  );
};
