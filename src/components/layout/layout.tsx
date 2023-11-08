import { ReactNode } from 'react';

import { Header } from 'src/components/ui/header';

import s from './layout.module.scss';
type AuthLayoutType = {
  children: ReactNode;
};
export const Layout = ({ children }: AuthLayoutType) => {
  return (
    <div className={s.container}>
      <Header />
      {/*<div className={s.main}>{isInitialized ? children : <AppLoader />}</div>*/}
      {children}
    </div>
  );
};
