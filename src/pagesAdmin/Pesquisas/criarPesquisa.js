// criarPesquisa.js
import React, { useState } from 'react';
import { usePesquisas } from './pesquisasContext';
import { useNavigate } from 'react-router-dom';

function CriarPesquisa() {
  const { pesquisas, setPesquisas } = usePesquisas();
  const navigate = useNavigate();

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
    setTitulo('');
    setImagem(null);
    setDescricao('');
    navigate('/pesquisasAdmin');
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default CriarPesquisa;
