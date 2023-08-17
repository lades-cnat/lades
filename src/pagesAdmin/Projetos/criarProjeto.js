import React, { useState } from 'react';
import { useProjetos } from './projetosContext';
import { useNavigate } from 'react-router-dom';

function CriarProjeto() {
  const { projetos, setProjetos } = useProjetos();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoProjeto = {
      id: Date.now(),
      titulo: titulo,
      resumo: resumo,
      dataInicio: dataInicio,
      dataFim: dataFim,
    };

    const novosProjetos = [...projetos, novoProjeto];
    setProjetos(novosProjetos);

    console.log('Dados do formulário de projeto:', { titulo, resumo, dataInicio, dataFim });
    setTitulo('');
    setResumo('');
    setDataInicio('');
    setDataFim('');
    navigate('/projetosAdmin');
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Registrar Projeto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título:</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo:</label>
            <textarea
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dataInicio" className="form-label">Data Início:</label>
            <input
              type="date"
              className="form-control"
              id="dataInicio"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dataFim" className="form-label">Data Fim:</label>
            <input
              type="date"
              className="form-control"
              id="dataFim"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </main>
    </div>
  );
}

export default CriarProjeto;
