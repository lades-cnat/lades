import React, { createContext, useState, useContext } from 'react';

const IntegrantesContext = createContext();

export function useIntegrantes() {
  return useContext(IntegrantesContext);
}

export function IntegrantesProvider({ children }) {
  const [integrantes, setIntegrantes] = useState([]);

  return (
    <IntegrantesContext.Provider value={{ integrantes, setIntegrantes }}>
      {children}
    </IntegrantesContext.Provider>
  );
}
