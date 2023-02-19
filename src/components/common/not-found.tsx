import { RoutePathConstants } from '@/constants';

import { Navigate } from 'react-router-dom';

const NotFound = () => {
  return <Navigate to={RoutePathConstants.Root} replace />;
};

export default NotFound;
