import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { useProjetos } from './projetosContext';

function Projetos() {
  const { projetos, setProjetos } = useProjetos();

  const handleRemoverProjeto = (id) => {
    const shouldRemove = window.confirm('Tem certeza que deseja remover este projeto?');
    if (shouldRemove) {
      const novosProjetos = projetos.filter((projeto) => projeto.id !== id);
      setProjetos(novosProjetos);
    }
  };

  const getNomesIntegrantes = (integranteIds) => {
    return integranteIds.map((integranteId) => {
    }).join(', ');
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1 className="mb-4">Lista de Projetos</h1>
        <Link to="/projetosCriar" className="mb-3 btn btn-primary">Registrar um novo projeto</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Data Início</th>
              <th>Data Fim</th>
              <th>Integrantes</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto) => (
              <tr key={projeto.id}>
                <td>{projeto.titulo}</td>
                <td>{projeto.resumo}</td>
                <td>{projeto.dataInicio}</td>
                <td>{projeto.dataFim}</td>
                <td>{getNomesIntegrantes(projeto.integrantes)}</td>
                <td>
                  <button onClick={() => handleRemoverProjeto(projeto.id)} className="btn btn-danger">Remover</button>
                </td>
                <td>
                  <Link to={`/projetosEditar/${projeto.id}`} className="btn btn-primary">Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Projetos;
