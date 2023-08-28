import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjetos } from './projetosContext';
import Header from '../../components/header';
import { useIntegrantes } from '../Integrantes/integrantesContext';

function EditarProjeto() {
  const { projetos, setProjetos } = useProjetos();
  const { id } = useParams();
  const navigate = useNavigate();
  const { integrantes } = useIntegrantes();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [integrantesAssociados, setIntegrantesAssociados] = useState([]);

  useEffect(() => {
    const projeto = projetos.find((projeto) => projeto.id === parseInt(id));
    if (projeto) {
      setTitulo(projeto.titulo);
      setResumo(projeto.resumo);
      setDataInicio(projeto.dataInicio);
      setDataFim(projeto.dataFim);
      setIntegrantesAssociados(projeto.integrantes || []);
    }
  }, [projetos, id]);

  const handleIntegranteToggle = (integranteId) => {
    setIntegrantesAssociados((prevIntegrantesAssociados) => {
      if (prevIntegrantesAssociados.includes(integranteId)) {
        return prevIntegrantesAssociados.filter((id) => id !== integranteId);
      } else {
        return [...prevIntegrantesAssociados, integranteId];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const projetoAtualizado = {
      id: parseInt(id),
      titulo: titulo,
      resumo: resumo,
      dataInicio: dataInicio,
      dataFim: dataFim,
      integrantes: integrantesAssociados,
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
      <Header />
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
          <div className="mb-3">
            <label className="form-label">Integrantes Associados:</label>
            <div>
              {integrantes.map((integrante) => (
                <div key={integrante.id} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`integrante-${integrante.id}`}
                    value={integrante.id}
                    checked={integrantesAssociados.includes(integrante.id)}
                    onChange={() => handleIntegranteToggle(integrante.id)}
                  />
                  <label className="form-check-label" htmlFor={`integrante-${integrante.id}`}>
                    {integrante.nome}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarProjeto;
