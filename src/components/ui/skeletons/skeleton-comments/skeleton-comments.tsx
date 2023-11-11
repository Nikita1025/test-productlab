import React from 'react';

import s from './skeleton-comments.module.scss';
export const SkeletonComments = () => {
  return (
    <div>
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
