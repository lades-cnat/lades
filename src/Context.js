import React, { createContext, useState, useContext } from 'react';

const PesquisasContext = createContext();

export function usePesquisas() {
  return useContext(PesquisasContext);
}

export function PesquisasProvider({ children }) {
  const [pesquisas, setPesquisas] = useState([]); 

  return (
    <PesquisasContext.Provider value={{ pesquisas, setPesquisas }}>
      {children}
    </PesquisasContext.Provider>
  );
}


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