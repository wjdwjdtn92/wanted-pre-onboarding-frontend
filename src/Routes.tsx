import { createBrowserRouter } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

export default createBrowserRouter([
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
]);
