import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePesquisas } from './pesquisasContext';
import Header from '../../components/header';

function EditarPesquisa() {
  const { pesquisas, setPesquisas } = usePesquisas();
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');
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
    if (imagem instanceof File) {
      localStorage.setItem(`pesquisaImagem_${id}`, URL.createObjectURL(imagem));
    }
    navigate('/pesquisasAdmin');
  };

  return (
    <div className="container">
            <Header />
      <main className="maincontato">
        <h1 className="mb-4">Editar Pesquisa</h1>
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
            <label htmlFor="imagem" className="form-label">Imagem:</label>
            <input
              type="file"
              className="form-control"
              id="imagem"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição:</label>
            <textarea
              className="form-control"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarPesquisa;
