import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import DetalhesProjetos from './detalhes';

function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [pesquisador, setPesquisador] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoProjeto = {
      id: Date.now(),
      titulo: titulo,
      resumo: resumo,
      dataInicio: dataInicio,
      dataFim: dataFim,
      pesquisador: pesquisador,
    };
    setProjetos([...projetos, novoProjeto]);
    // Limpamos os campos após o registro
    setTitulo('');
    setResumo('');
    setDataInicio('');
    setDataFim('');
    setPesquisador('');
  };

  const handleDetalharProjeto = (id) => {
    console.log('Detalhar projeto com id:', id);
    // Aqui você pode adicionar a lógica para mostrar as informações detalhadas do projeto
  };

  const handleRemoverProjeto = (id) => {
    const novosProjetos = projetos.filter((projeto) => projeto.id !== id);
    setProjetos(novosProjetos);
  };

  const handleEditarProjeto = (id, novoProjeto) => {
    const novosProjetos = projetos.map((projeto) =>
      projeto.id === id ? { ...projeto, ...novoProjeto } : projeto
    );
    setProjetos(novosProjetos);
  };

  // Aqui vamos criar um array simulado de integrantes apenas para teste, você deve substituir isso pelos dados reais
  const integrantes = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Pedro' },
  ];

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1>Registrar Projeto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titulo">Título: </label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="resumo">Resumo: </label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dataInicio">Data de Início: </label>
            <input
              type="date"
              id="dataInicio"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dataFim">Data de Fim: </label>
            <input
              type="date"
              id="dataFim"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pesquisador">Pesquisador: </label>
            <select
              id="pesquisador"
              value={pesquisador}
              onChange={(e) => setPesquisador(e.target.value)}
              required
            >
              <option value="">Selecione um pesquisador</option>
              {integrantes.map((integrante) => (
                <option key={integrante.id} value={integrante.nome}>
                  {integrante.nome}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </main>
      <aside>
        <DetalhesProjetos
          projetos={projetos}
          onDetalhar={handleDetalharProjeto}
          onRemover={handleRemoverProjeto}
          onEditar={handleEditarProjeto}
        />
      </aside>
      <Footer />
    </div>
  );
}

export default Projetos;
