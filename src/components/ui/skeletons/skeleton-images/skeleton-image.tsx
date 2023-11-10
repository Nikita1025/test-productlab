import React from 'react';

import { Card } from 'src/components/ui/card-temporary';

import s from './skeleton-image.module.scss';
export const SkeletonImage = () => {
  return (
    <div className={s.container}>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
      <div className={s.block}></div>
    </div>
  );
};
