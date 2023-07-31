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
