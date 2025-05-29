import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
