import React from 'react';

import { Layout, NotFound } from '../components';

const DynamicMain = React.lazy(() => import('../pages/Main'));
const DynamicDetail = React.lazy(() => import('../pages/Detail'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DynamicMain />,
        index: true,
      },
      { path: 'repos/:id', element: <DynamicDetail />, index: true },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
