// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ redirectTo = '/', component }) => {
//   // треба перевірити чи авторизований користувач(чи є токен у глобальному стейті)

//   // змінити умову для авторизованого чи неавторизованого користувача(!auth)
//   const shouldRedirect = true; //замінити на значення зі стейту
//   return shouldRedirect ? <Navigate to={redirectTo} /> : component;
// };

// export default PrivateRoute;

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/auth/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
