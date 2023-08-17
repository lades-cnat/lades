import React, { createContext, useState, useContext, useEffect } from 'react';

const ProjetosContext = createContext();

export function useProjetos() {
  return useContext(ProjetosContext);
}

export function ProjetosProvider({ children }) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const storedProjetos = localStorage.getItem('projetos');
    if (storedProjetos) {
      setProjetos(JSON.parse(storedProjetos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projetos', JSON.stringify(projetos));
  }, [projetos]);

  return (
    <ProjetosContext.Provider value={{ projetos, setProjetos }}>
      {children}
    </ProjetosContext.Provider>
  );
}
