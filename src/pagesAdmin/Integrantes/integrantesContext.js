import React, { createContext, useState, useContext, useEffect } from 'react';

const IntegrantesContext = createContext();

export function useIntegrantes() {
  return useContext(IntegrantesContext);
}

export function IntegrantesProvider({ children }) {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    // Carregar dados do localStorage no momento do carregamento da página
    const storedIntegrantes = localStorage.getItem('integrantes');
    if (storedIntegrantes) {
      setIntegrantes(JSON.parse(storedIntegrantes));
    }
  }, []);

  useEffect(() => {
    // Atualizar o localStorage sempre que o estado de integrantes mudar
    localStorage.setItem('integrantes', JSON.stringify(integrantes));
  }, [integrantes]);

  return (
    <IntegrantesContext.Provider value={{ integrantes, setIntegrantes }}>
      {children}
    </IntegrantesContext.Provider>
  );
}
