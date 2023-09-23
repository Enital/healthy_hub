import Header from 'components/Header/Header';
import AuthNav from 'components/authNav/AuthNav';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {!isLoggedIn ? <AuthNav /> : <Header />}
      <Outlet />
    </div>
  );
}

export default Layout;
