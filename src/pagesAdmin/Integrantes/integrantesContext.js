import React, { createContext, useState, useContext, useEffect } from 'react';

const IntegrantesContext = createContext();

export function useIntegrantes() {
  return useContext(IntegrantesContext);
}

export function IntegrantesProvider({ children }) {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    const storedIntegrantes = localStorage.getItem('integrantes');
    if (storedIntegrantes) {
      setIntegrantes(JSON.parse(storedIntegrantes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('integrantes', JSON.stringify(integrantes));
  }, [integrantes]);

  return (
    <IntegrantesContext.Provider value={{ integrantes, setIntegrantes }}>
      {children}
    </IntegrantesContext.Provider>
  );
}
