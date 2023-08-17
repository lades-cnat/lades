import React, { createContext, useState, useContext, useEffect } from 'react';

const ProjetosContext = createContext();

export function useProjetos() {
  return useContext(ProjetosContext);
}

export function ProjetosProvider({ children }) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    // Carregar dados do localStorage no momento do carregamento da página
    const storedProjetos = localStorage.getItem('projetos');
    if (storedProjetos) {
      setProjetos(JSON.parse(storedProjetos));
    }
  }, []);

  useEffect(() => {
    // Atualizar o localStorage sempre que o estado de projetos mudar
    localStorage.setItem('projetos', JSON.stringify(projetos));
  }, [projetos]);

  return (
    <ProjetosContext.Provider value={{ projetos, setProjetos }}>
      {children}
    </ProjetosContext.Provider>
  );
}
