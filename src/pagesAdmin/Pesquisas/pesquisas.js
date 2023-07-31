import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { usePesquisas } from './pesquisasContext'; 

function Pesquisas() {
  const { pesquisas, setPesquisas } = usePesquisas(); // Use o hook usePesquisas

  const handleRemoverPesquisa = (id) => {
    const shouldRemove = window.confirm('Tem certeza que deseja remover esta pesquisa?');
    if (shouldRemove) {
      const novasPesquisas = pesquisas.filter((pesquisa) => pesquisa.id !== id);
      setPesquisas(novasPesquisas);
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1>Lista Linhas de Pesquisas</h1>
        <Link to="/pesquisasCriar">Registrar nova Linha de pesquisa</Link> 
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Imagem</th>
              <th>Descrição</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pesquisas.map((pesquisa) => (
              <tr key={pesquisa.id}>
                <td>{pesquisa.nome}</td>
                <td>{pesquisa.imagem && <img src={URL.createObjectURL(pesquisa.imagem)} alt={`Imagem de ${pesquisa.nome}`} style={{ width: '100px' }} />}</td>
                <td>{pesquisa.descricao}</td>
                <td>
                  <button onClick={() => handleRemoverPesquisa(pesquisa.id)}>Remover</button>
                </td>
                <td>
                  <Link to={`/pesquisasEditar/${pesquisa.id}`}>Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default Pesquisas;
