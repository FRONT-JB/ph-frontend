import { Navigate } from 'react-router-dom';

import { RoutePathConstants } from '@/constants';

const NotFound = () => {
  return <Navigate to={RoutePathConstants.Root} replace />;
};

export default NotFound;
