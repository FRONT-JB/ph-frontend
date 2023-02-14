import RouteConstant from '@/constants/RouteConstants';

import { Navigate } from 'react-router-dom';

const NotFound = () => {
  return <Navigate to={RouteConstant.Root} replace />;
};

export default NotFound;
