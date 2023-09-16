// import { Navigate } from 'react-router-dom';

// const RestrictedRoute = ({ component, redirectTo }) => {
//   // перевірити, чи зареєстрований користувач( чи є токен у стейті)
//   const auth = false; //замінити на значення зі стейту
//   return auth ? <Navigate to={redirectTo} replace /> : component;
// };

// export default RestrictedRoute;

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/auth/useAuth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
