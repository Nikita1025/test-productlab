import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from 'src/app/routes/routes';
import { useAppSelector } from 'src/services';

export const PrivateRoutes = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};
