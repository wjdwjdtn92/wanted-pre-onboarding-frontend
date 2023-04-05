import { useContext } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';

function useAuth(): AuthContextType {
  const authConxt = useContext(AuthContext);

  return authConxt;
}

export default useAuth;
