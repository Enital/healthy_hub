import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/auth/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
