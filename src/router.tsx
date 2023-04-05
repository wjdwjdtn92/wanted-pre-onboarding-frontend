import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TodoRoute from './components/TodoRoute';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter([
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
]);

export default router;
