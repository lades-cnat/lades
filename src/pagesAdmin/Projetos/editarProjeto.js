import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjetos } from './projetosContext'; // Importe o contexto de projetos

function EditarProjeto() {
  const { projetos, setProjetos } = useProjetos(); // Use o contexto de projetos
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  useEffect(() => {
    const projeto = projetos.find((projeto) => projeto.id === parseInt(id));
    if (projeto) {
      setTitulo(projeto.titulo);
      setResumo(projeto.resumo);
      setDataInicio(projeto.dataInicio);
      setDataFim(projeto.dataFim);
    }
  }, [projetos, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const projetoAtualizado = {
      id: parseInt(id),
      titulo: titulo,
      resumo: resumo,
      dataInicio: dataInicio,
      dataFim: dataFim,
    };
    const novosProjetos = projetos.map((projeto) =>
      projeto.id === parseInt(id) ? projetoAtualizado : projeto
    );
    setProjetos(novosProjetos);

    console.log('Dados do formulário de projeto atualizado:', projetoAtualizado);
    navigate('/projetosAdmin');
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Editar Projeto</h1>
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
            <label htmlFor="dataInicio" className="form-label">Data de Início:</label>
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
            <label htmlFor="dataFim" className="form-label">Data de Fim:</label>
            <input
              type="date"
              className="form-control"
              id="dataFim"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarProjeto;
