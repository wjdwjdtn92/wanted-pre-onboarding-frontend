import React, { createContext } from 'react';

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
});

export { AuthContext };
export type { AuthContextType };
