import React, { useState } from 'react';

function CadaPesquisa({ nome, onClick }) {
  return (
    <div>
      <span>{nome}</span>
      <button onClick={onClick}>Detalhar</button>
    </div>
  );
}

function DetalhesPesquisas({ pesquisas, onDetalhar }) {
  const [pesquisaDetalhada, setPesquisaDetalhada] = useState(null);

  const handleDetalharPesquisa = (id) => {
    const pesquisa = pesquisas.find((p) => p.id === id);
    setPesquisaDetalhada(pesquisa);
    onDetalhar(id); // Apenas para fins de demonstração, pode ser removido
  };

  return (
    <div>
      <h2>Lista de Pesquisas</h2>
      {pesquisas.map((pesquisa) => (
        <CadaPesquisa
          key={pesquisa.id}
          nome={pesquisa.nome}
          onClick={() => handleDetalharPesquisa(pesquisa.id)}
        />
      ))}

      {/* Exibir detalhes da pesquisa selecionada */}
      {pesquisaDetalhada && (
        <div>
          <h3>Detalhes da Pesquisa</h3>
          <p>Título: {pesquisaDetalhada.nome}</p>
          <p>Imagem: {pesquisaDetalhada.imagem}</p>
          <p>Descrição: {pesquisaDetalhada.descricao}</p>
        </div>
      )}
    </div>
  );
}

export default DetalhesPesquisas;
