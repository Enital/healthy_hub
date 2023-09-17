import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import OnePage from '../pages/OnePage/OnePage.jsx';
import SignUpPage from '../pages/SignUpPage/SignUpPage.jsx';
import SignIn from '../pages/SignIn/SignIn.jsx';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword.jsx';
import Main from '../pages/Main/Main.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Diary from '../pages/Diary/Diary.jsx';
import RecommendedFood from '../pages/RecommendedFood/RecommendedFood.jsx';
import ProfileSettings from '../pages/ProfileSettings/ProfileSettings.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';
import { useAuth } from 'redux/auth/useAuth.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations.js';

function App() {
  // useEffect для перевірки чи зареєстрований юзер при перезавантаженні сторінки
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  //

  const { isLoggedIn } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={!isLoggedIn ? <OnePage /> : <Main />} />

        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
          }
        />
        <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/" component={<SignIn />} />}
        />
        <Route
          path="forgot-password"
          element={
            <RestrictedRoute redirectTo="/" component={<ForgotPassword />} />
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectTo="/signin" component={<Dashboard />} />
          }
        />
        <Route
          path="diary"
          element={<PrivateRoute redirectTo="/signin" component={<Diary />} />}
        />
        <Route
          path="recommended-food"
          element={
            <PrivateRoute
              redirectTo="/signin"
              component={<RecommendedFood />}
            />
          }
        />
        <Route
          path="settings"
          element={
            <PrivateRoute
              redirectTo="/signin"
              component={<ProfileSettings />}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
