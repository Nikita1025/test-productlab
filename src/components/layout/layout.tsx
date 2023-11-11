import React, { ReactNode } from 'react';

import { LinearProgress } from '@mui/material';
import { Header } from 'src/components/ui/header';
import { useAppSelector, appStatusSelector } from 'src/services';

import s from './layout.module.scss';

type AuthLayoutType = {
  children: ReactNode;
};
export const Layout = ({ children }: AuthLayoutType) => {
  const isLoading = useAppSelector(appStatusSelector);

  return (
    <div className={s.container}>
      <Header />
      {isLoading && <LinearProgress color={'primary'} style={{ width: '100%' }} />}

      <div className={s.main}>{children}</div>
    </div>
  );
};
