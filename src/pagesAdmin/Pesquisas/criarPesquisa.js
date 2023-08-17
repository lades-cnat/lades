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
      imagem: null,
      descricao: descricao,
      detalhado: false,
    };
  
    if (imagem) {
      const reader = new FileReader();
      reader.onload = (e) => {
        novaPesquisa.imagem = e.target.result; 
        const novasPesquisas = [...pesquisas, novaPesquisa];
        setPesquisas(novasPesquisas);
        console.log('Dados do formulário de pesquisa:', { titulo, imagem, descricao });
        setTitulo('');
        setImagem(null);
        setDescricao('');
        navigate('/pesquisasAdmin');
      };
      reader.readAsDataURL(imagem);
    } else {
      const novasPesquisas = [...pesquisas, novaPesquisa];
      setPesquisas(novasPesquisas);
      console.log('Dados do formulário de pesquisa:', { titulo, imagem, descricao });
      setTitulo('');
      setImagem(null);
      setDescricao('');
      navigate('/pesquisasAdmin');
    }
  };
  
  

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Registrar Pesquisa</h1>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="descricao" className="form-label">Descrição:</label>
            <textarea
              className="form-control"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </main>
    </div>
  );
}

export default CriarPesquisa;
