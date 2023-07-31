// editarPesquisa.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePesquisas } from './pesquisasContext';

function EditarPesquisa() {
  const { pesquisas, setPesquisas } = usePesquisas();
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const pesquisa = pesquisas.find((pesquisa) => pesquisa.id === parseInt(id));
    if (pesquisa) {
      setTitulo(pesquisa.nome);
      setImagem(pesquisa.imagem);
      setDescricao(pesquisa.descricao);
    }
  }, [pesquisas, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pesquisaAtualizada = {
      id: parseInt(id),
      nome: titulo,
      imagem: imagem,
      descricao: descricao,
    };
    const novasPesquisas = pesquisas.map((pesquisa) =>
      pesquisa.id === parseInt(id) ? pesquisaAtualizada : pesquisa
    );
    setPesquisas(novasPesquisas);
    console.log('Dados do formulário de pesquisa atualizado:', pesquisaAtualizada);
    navigate('/pesquisasAdmin');
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1>Editar Pesquisa</h1>
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
          <button type="submit">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarPesquisa;
