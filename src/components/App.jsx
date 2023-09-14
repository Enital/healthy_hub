import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
// const MovieDetail = lazy(() => import('../Pages/MovieDetail/MovieDetail'));
const Layout = lazy(() => import('../components/Layout/Layout'));
// const Movies = lazy(() => import('../Pages/Movies/Movies'));
// const Casts = lazy(() => import('../components/Casts/Casts'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />} /> */}

          {/* <Route path="movies/:movieId" element={<MovieDetail />}> */}
          {/* <Route path="cast" element={<Casts />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
