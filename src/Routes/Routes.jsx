import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Installation from '../Pages/Installation';
import Apps from '../Pages/Apps';
import ErrorPage from '../Pages/ErrorPage';
import AppsDetails from '../Pages/AppsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/detail/:id',
        Component: AppsDetails,
      },
    ],
  },
]);

export default router;
