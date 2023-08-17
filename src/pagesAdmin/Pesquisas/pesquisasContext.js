import React, { createContext, useState, useContext, useEffect } from 'react';

const PesquisasContext = createContext();

export function usePesquisas() {
  return useContext(PesquisasContext);
}

export function PesquisasProvider({ children }) {
  const [pesquisas, setPesquisas] = useState([]);
  const [integrantesAssociados, setIntegrantesAssociados] = useState({}); 

  useEffect(() => {
    const storedPesquisas = localStorage.getItem('pesquisas');
    if (storedPesquisas) {
      setPesquisas(JSON.parse(storedPesquisas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
  }, [pesquisas]);

  return (
    <PesquisasContext.Provider value={{ pesquisas, setPesquisas, integrantesAssociados, setIntegrantesAssociados }}>
      {children}
    </PesquisasContext.Provider>
  );
}