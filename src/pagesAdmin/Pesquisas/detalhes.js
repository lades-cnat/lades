import React, { useState } from 'react';

function CadaPesquisa({ pesquisa, pesquisas, onDetalhar, onRemover, onEditar, setPesquisas }) {
  const [editando, setEditando] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(pesquisa.nome);
  const [imagemEditada, setImagemEditada] = useState(pesquisa.imagem);
  const [descricaoEditada, setDescricaoEditada] = useState(pesquisa.descricao);

  const handleSalvarEdicao = () => {
    const novasPesquisas = pesquisas.map((p) =>
      p.id === pesquisa.id
        ? {
            ...p,
            nome: tituloEditado,
            imagem: imagemEditada,
            descricao: descricaoEditada,
          }
        : p
    );
    setPesquisas(novasPesquisas);
    setEditando(false);
  };

  return (
    <div>
      <h3>{pesquisa.nome}</h3>
      {editando ? (
        <>
          <div>
            <label htmlFor="titulo">Título: </label>
            <input
              type="text"
              id="titulo"
              value={tituloEditado}
              onChange={(e) => setTituloEditado(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="imagem">Imagem: </label>
            <input
              type="file"
              id="imagem"
              onChange={(e) => setImagemEditada(e.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição: </label>
            <textarea
              id="descricao"
              value={descricaoEditada}
              onChange={(e) => setDescricaoEditada(e.target.value)}
              required
            />
          </div>
          <button onClick={handleSalvarEdicao}>Salvar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <button onClick={() => onDetalhar(pesquisa.id)}>
            {pesquisa.detalhado ? 'Esconder Detalhes' : 'Detalhar'}
          </button>
          <button onClick={() => onRemover(pesquisa.id)}>Remover</button>
          <button onClick={() => setEditando(true)}>Editar</button>
          {pesquisa.detalhado && (
            <div>
              <p>Título: {pesquisa.nome}</p>
              <p>Imagem: {pesquisa.imagem && <img src={URL.createObjectURL(pesquisa.imagem)} alt={`Imagem de ${pesquisa.nome}`} style={{ width: '100px' }} />}</p>
              <p>Descrição: {pesquisa.descricao}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function DetalhesPesquisas({ pesquisas, detalharPesquisa, onRemover, onEditar, setPesquisas }) {
  return (
    <div>
      <h2>Lista de Pesquisas</h2>
      {pesquisas.map((pesquisa) => (
        <CadaPesquisa
          key={pesquisa.id}
          pesquisa={pesquisa}
          pesquisas={pesquisas}
          onDetalhar={detalharPesquisa}
          onRemover={onRemover}
          onEditar={onEditar}
          setPesquisas={setPesquisas}
        />
      ))}
    </div>
  );
}

export default DetalhesPesquisas;
