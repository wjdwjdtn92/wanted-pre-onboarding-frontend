import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';

function TodoRoute() {
  const { accessToken } = useAuth();
  console.log(accessToken);

  return accessToken ? <Navigate to="/todo" /> : <Outlet />;
}

export default TodoRoute;
