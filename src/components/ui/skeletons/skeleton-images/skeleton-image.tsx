import React from 'react';

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
