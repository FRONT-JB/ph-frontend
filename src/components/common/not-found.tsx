import RoutePath from '@/constants/route-path';

import { Navigate } from 'react-router-dom';

const NotFound = () => {
  return <Navigate to={RoutePath.Root} replace />;
};

export default NotFound;
