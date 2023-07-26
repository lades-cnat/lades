import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './pesquisas.css';
import DetalhesPesquisas from './detalhes';

function Pesquisas() {
  const [pesquisas, setPesquisas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novaPesquisa = {
      id: Date.now(),
      nome: titulo,
      imagem: imagem,
      descricao: descricao,
      detalhado: false,
    };
    setPesquisas([...pesquisas, novaPesquisa]);
    console.log('Dados do formulário de pesquisa:', { titulo, imagem, descricao });
    // Limpamos os campos após o registro
    setTitulo('');
    setImagem(null);
    setDescricao('');
  };

  const detalharPesquisa = (id) => {
    const novasPesquisas = pesquisas.map((pesquisa) =>
      pesquisa.id === id ? { ...pesquisa, detalhado: !pesquisa.detalhado } : pesquisa
    );
    setPesquisas(novasPesquisas);
  };

  const handleRemoverPesquisa = (id) => {
    const novasPesquisas = pesquisas.filter((pesquisa) => pesquisa.id !== id);
    setPesquisas(novasPesquisas);
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1>Registrar Pesquisa</h1>
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
            <label htmlFor="imagem">Imagem: </label>
            <input
              type="file"
              id="imagem"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição: </label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </main>
      <aside>
        <DetalhesPesquisas
          pesquisas={pesquisas}
          detalharPesquisa={detalharPesquisa}
          onRemover={handleRemoverPesquisa}
        />
      </aside>
      <Footer />
    </div>
  );
}

export default Pesquisas;
