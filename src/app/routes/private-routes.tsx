import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from 'src/app/routes/routes';
import { setIsAuth, useAppDispatch } from 'src/services';

export const PrivateRoutes = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('JWT');

  console.log(token);
  if (token) {
    dispatch(setIsAuth(true));
  }

  return token ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};
