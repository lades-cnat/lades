import React, { useState } from 'react';
import { useProjetos } from './projetosContext';
import { useNavigate } from 'react-router-dom';
import { useIntegrantes } from '../Integrantes/integrantesContext'; // Importe o contexto de integrantes
import Header from '../../components/header';

function CriarProjeto() {
  const { projetos, setProjetos } = useProjetos();
  const { integrantes } = useIntegrantes(); // Obtenha a lista de integrantes
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [integrantesAssociados, setIntegrantesAssociados] = useState([]); // Estado para integrantes associados ao projeto

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoProjeto = {
      id: Date.now(),
      titulo: titulo,
      resumo: resumo,
      dataInicio: dataInicio,
      dataFim: dataFim,
      integrantes: integrantesAssociados, // Associe os integrantes ao projeto
    };

    const novosProjetos = [...projetos, novoProjeto];
    setProjetos(novosProjetos);

    console.log('Dados do formulário de projeto:', { titulo, resumo, dataInicio, dataFim, integrantesAssociados });
    setTitulo('');
    setResumo('');
    setDataInicio('');
    setDataFim('');
    setIntegrantesAssociados([]);
    navigate('/projetosAdmin');
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1 className="mb-4">Registrar Projeto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título:
            </label>
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
            <label htmlFor="resumo" className="form-label">
              Resumo:
            </label>
            <textarea
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dataInicio" className="form-label">
              Data Início:
            </label>
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
            <label htmlFor="dataFim" className="form-label">
              Data Fim:
            </label>
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
            <label className="form-label">Associar Integrantes:</label>
            {integrantes.map((integrante) => (
              <div key={integrante.id} className="form-check">
                <input
                  type="checkbox"
                  id={`integrante-${integrante.id}`}
                  className="form-check-input"
                  checked={integrantesAssociados.includes(integrante.id)}
                  onChange={() => {
                    setIntegrantesAssociados((prevIntegrantesAssociados) =>
                      prevIntegrantesAssociados.includes(integrante.id)
                        ? prevIntegrantesAssociados.filter((id) => id !== integrante.id)
                        : [...prevIntegrantesAssociados, integrante.id]
                    );
                  }}
                />
                <label htmlFor={`integrante-${integrante.id}`} className="form-check-label">
                  {integrante.nome}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default CriarProjeto;
