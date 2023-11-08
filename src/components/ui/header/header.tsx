import React from 'react';

import { Typography } from 'src/components/ui/typography';

import s from './header.module.scss';

export const Header = () => {
  return (
    <div className={s.containerMain}>
      <div className={s.container}>
        <div className={s.content}>
          <Typography variant="large" className={s.text}>
            Productlab
          </Typography>
        </div>
      </div>
    </div>
  );
};
