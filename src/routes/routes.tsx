import React from 'react';

import { Layout, NotFound } from '@/components';

const DynamicMain = React.lazy(() => import('../pages/main'));
const DynamicDetail = React.lazy(() => import('../pages/detail'));
const DynamicFavorit = React.lazy(() => import('../pages/favorit'));

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
      { path: 'detail', element: <DynamicDetail />, index: true },
      { path: 'favorit', element: <DynamicFavorit />, index: true },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
