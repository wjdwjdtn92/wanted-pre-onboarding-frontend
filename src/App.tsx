import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider';

import router from './router';
import './styles/main.scss';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
