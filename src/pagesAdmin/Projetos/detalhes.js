import React, { useState } from 'react';

function CadaProjeto({ titulo, resumo, dataInicio, dataFim, pesquisador, onDetalhar, onRemover, onEditar }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h3>{titulo}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>Detalhar</button>
      <button onClick={onEditar}>Editar</button>
      <button onClick={onRemover}>Remover</button>
      {showDetails && (
        <div>
          <p>Resumo: {resumo}</p>
          <p>Data de Início: {dataInicio}</p>
          <p>Data de Fim: {dataFim}</p>
          <p>Pesquisador: {pesquisador}</p>
        </div>
      )}
    </div>
  );
}

function DetalhesProjetos({ projetos, onDetalhar, onRemover, onEditar }) {
  const [editandoId, setEditandoId] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const [resumoEditado, setResumoEditado] = useState('');
  const [dataInicioEditada, setDataInicioEditada] = useState('');
  const [dataFimEditada, setDataFimEditada] = useState('');
  const [pesquisadorEditado, setPesquisadorEditado] = useState('');

  const handleRemover = (id) => {
    setEditandoId(null);
    onRemover(id);
  };

  const handleEditar = (id, projeto) => {
    setEditandoId(id);
    setTituloEditado(projeto.titulo);
    setResumoEditado(projeto.resumo);
    setDataInicioEditada(projeto.dataInicio);
    setDataFimEditada(projeto.dataFim);
    setPesquisadorEditado(projeto.pesquisador);
  };

  const handleSalvarEdicao = (id) => {
    // Atualiza o projeto na lista de projetos
    const novoProjeto = {
      id: id,
      titulo: tituloEditado,
      resumo: resumoEditado,
      dataInicio: dataInicioEditada,
      dataFim: dataFimEditada,
      pesquisador: pesquisadorEditado,
    };

    onEditar(id, novoProjeto);
    setEditandoId(null);
  };

  const handleCancelarEdicao = () => {
    setEditandoId(null);
  };

  return (
    <div>
      <h2>Lista de Projetos</h2>
      {projetos.map((projeto) => (
        <div key={projeto.id}>
          {editandoId === projeto.id ? (
            <div>
              <h3>Editando: {projeto.titulo}</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="titulo">Título: </label>
                  <input
                    type="text"
                    id="titulo"
                    value={tituloEditado}
                    onChange={(e) => setTituloEditado(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="resumo">Resumo: </label>
                  <textarea
                    id="resumo"
                    value={resumoEditado}
                    onChange={(e) => setResumoEditado(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="dataInicio">Data de Início: </label>
                  <input
                    type="date"
                    id="dataInicio"
                    value={dataInicioEditada}
                    onChange={(e) => setDataInicioEditada(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="dataFim">Data de Fim: </label>
                  <input
                    type="date"
                    id="dataFim"
                    value={dataFimEditada}
                    onChange={(e) => setDataFimEditada(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="pesquisador">Pesquisador: </label>
                  <select
                    id="pesquisador"
                    value={pesquisadorEditado}
                    onChange={(e) => setPesquisadorEditado(e.target.value)}
                  >
                    {/* Aqui você pode mapear os integrantes reais da sua base de dados */}
                    <option value="">Selecione um pesquisador</option>
                    <option value="João">João</option>
                    <option value="Maria">Maria</option>
                    <option value="Pedro">Pedro</option>
                  </select>
                </div>
                <button onClick={() => handleSalvarEdicao(projeto.id)}>Salvar</button>
                <button onClick={handleCancelarEdicao}>Cancelar</button>
              </form>
            </div>
          ) : (
            <CadaProjeto
              titulo={projeto.titulo}
              resumo={projeto.resumo}
              dataInicio={projeto.dataInicio}
              dataFim={projeto.dataFim}
              pesquisador={projeto.pesquisador}
              onDetalhar={() => onDetalhar(projeto.id)}
              onRemover={() => handleRemover(projeto.id)}
              onEditar={() => handleEditar(projeto.id, projeto)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default DetalhesProjetos;
