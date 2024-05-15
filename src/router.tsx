import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FavouritesPage from './pages/FavouritesPage';
import IndexPage from './pages/IndexPage';
import Layout from './layouts/Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favoritos' element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
