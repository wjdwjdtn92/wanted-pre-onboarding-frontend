import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';

function PrivateRoute() {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
