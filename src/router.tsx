import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import TodoRoute from './components/TodoRoute';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/signin" />,
      },
      {
        path: '/',
        element: <TodoRoute />,
        children: [
          {
            path: 'signup',
            element: <SignupPage />,
          },
          {
            path: 'signin',
            element: <SigninPage />,
          },
        ],
      },

      {
        path: '/',
        element: <PrivateRoute />,
        children: [
          {
            path: 'todo',
            element: <TodoPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
