// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserAuthenticated, setAuthStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
