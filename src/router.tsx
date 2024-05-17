import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import Layout from './layouts/Layout';
import IndexPage from './pages/IndexPage';

const FavouritesPage = lazy(() => import('./pages/FavouritesPage'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route
            path='/favoritos'
            element={
              <Suspense fallback='Cargando...'>
                <FavouritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
