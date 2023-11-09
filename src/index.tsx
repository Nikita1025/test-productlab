import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/app/App';
import { store } from 'src/services';

import { worker } from './services/mocks/browser';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('src/services/mocks/browser');

  worker.start();
}
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
