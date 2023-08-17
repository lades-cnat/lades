import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { usePesquisas } from './pesquisasContext';
import { useIntegrantes } from '../Integrantes/integrantesContext'; 

function Pesquisas() {
  const { pesquisas, setPesquisas } = usePesquisas();
  const { integrantes, setIntegrantes } = useIntegrantes(); 

  const handleRemoverPesquisa = (id) => {
    const shouldRemove = window.confirm('Tem certeza que deseja remover esta pesquisa?');
    if (shouldRemove) {
      const novasPesquisas = pesquisas.filter((pesquisa) => pesquisa.id !== id);
      setPesquisas(novasPesquisas);
      const novosIntegrantes = integrantes.map((integrante) => ({
        ...integrante,
        pesquisas: integrante.pesquisas.filter(pesquisaId => pesquisaId !== id),
      }));
      setIntegrantes(novosIntegrantes);
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1 className="mb-4">Lista Linhas de Pesquisas</h1>
        <Link to="/pesquisasCriar" className="btn btn-primary mb-4">Registrar nova Linha de pesquisa</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Integrantes</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pesquisas.map((pesquisa) => (
              <tr key={pesquisa.id}>
                <td>
                  {pesquisa.imagem && (
                    <img
                      src={
                        pesquisa.imagem instanceof File
                          ? localStorage.getItem(`pesquisaImagem_${pesquisa.id}`)
                          : pesquisa.imagem
                      }
                      alt={`Imagem de ${pesquisa.nome}`}
                      style={{ width: '100px' }}
                    />
                  )}
                </td>
                <td>{pesquisa.nome}</td>
                <td>{pesquisa.descricao}</td>
                <td>
                  <ul>
                    {integrantes
                      .filter(integrante => integrante.pesquisas && integrante.pesquisas.includes(pesquisa.id))
                      .map(integrante => (
                        <li key={integrante.id}>{integrante.nome}</li>
                      ))}
                  </ul>
                </td>
                <td>
                  <button onClick={() => handleRemoverPesquisa(pesquisa.id)} className="btn btn-danger">Remover</button>
                </td>
                <td>
                  <Link to={`/pesquisasEditar/${pesquisa.id}`} className="btn btn-secondary">Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Pesquisas;
  