import React, { createContext, useState, useContext, useEffect } from 'react';

const PesquisasContext = createContext();

export function usePesquisas() {
  return useContext(PesquisasContext);
}

export function PesquisasProvider({ children }) {
  const [pesquisas, setPesquisas] = useState([]);

  useEffect(() => {
    // Carregar dados do localStorage no momento do carregamento da página
    const storedPesquisas = localStorage.getItem('pesquisas');
    if (storedPesquisas) {
      setPesquisas(JSON.parse(storedPesquisas));
    }
  }, []);

  useEffect(() => {
    // Atualizar o localStorage sempre que o estado de pesquisas mudar
    localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
  }, [pesquisas]);

  return (
    <PesquisasContext.Provider value={{ pesquisas, setPesquisas }}>
      {children}
    </PesquisasContext.Provider>
  );
}
