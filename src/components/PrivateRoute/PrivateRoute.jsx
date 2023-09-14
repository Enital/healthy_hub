import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', component }) => {
  // треба перевірити чи авторизований користувач(чи є токен у глобальному стейті)

  // змінити умову для авторизованого чи неавторизованого користувача(!auth)
  const shouldRedirect = true; //замінити на значення зі стейту
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
