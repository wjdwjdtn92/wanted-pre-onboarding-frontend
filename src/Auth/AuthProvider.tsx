import React, { useEffect, useMemo, useState } from 'react';
import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('access_token') || null,
  );

  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'));
  }, []);

  const value = useMemo(() => {
    return { accessToken, setAccessToken };
  }, [accessToken, setAccessToken]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
