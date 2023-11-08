import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { LoginForm } from 'src/components/auth';
import { ImagesPage } from 'src/components/images-page/images-page';
import { ErrorPage } from 'src/components/ui/404';

import { PrivateRoutes } from './private-routes';
import { PATH } from './routes';

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={PATH.MAIN} element={<ImagesPage />} />
          {/*<Route path={PATH.MAIN + ':id'} element={<PurchaseOrderPage />} />*/}
          {/*<Route path={PATH.MAIN + ':id' + PATH.PRODUCTS} element={<Products />} />*/}
        </Route>
        <Route path={PATH.LOGIN} element={<LoginForm />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </>
  );
};
