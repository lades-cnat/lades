import React, { useState } from 'react';
import { useIntegrantes } from './integrantesContext';
import { usePesquisas } from '../Pesquisas/pesquisasContext'; // Importe o contexto de pesquisas
import { useNavigate } from 'react-router-dom';

function CriarIntegrante() {
  const { integrantes, setIntegrantes } = useIntegrantes();
  const { pesquisas } = usePesquisas(); // Use o contexto de pesquisas
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);
  const [linhasPesquisa, setLinhasPesquisa] = useState([]); // Estado para armazenar as linhas de pesquisa selecionadas

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoIntegrante = {
      id: Date.now(),
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
      imagem: null,
      linhasPesquisa: linhasPesquisa, // Associando as linhas de pesquisa ao integrante
    };

    if (imagem) {
      const reader = new FileReader();
      reader.onload = (e) => {
        novoIntegrante.imagem = e.target.result;
        const novosIntegrantes = [...integrantes, novoIntegrante];
        setIntegrantes(novosIntegrantes);
        console.log('Dados do formulário de integrante:', { nome, curriculo, email, papel, imagem, linhasPesquisa });
        setNome('');
        setCurriculo('');
        setEmail('');
        setPapel('');
        setImagem(null);
        setLinhasPesquisa([]); // Limpar as linhas de pesquisa selecionadas
        navigate('/integrantesAdmin');
      };
      reader.readAsDataURL(imagem);
    } else {
      const novosIntegrantes = [...integrantes, novoIntegrante];
      setIntegrantes(novosIntegrantes);
      console.log('Dados do formulário de integrante:', { nome, curriculo, email, papel, imagem, linhasPesquisa });
      setNome('');
      setCurriculo('');
      setEmail('');
      setPapel('');
      setImagem(null);
      setLinhasPesquisa([]); // Limpar as linhas de pesquisa selecionadas
      navigate('/integrantesAdmin');
    }
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Registrar Integrante</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="imagem" className="form-label">Imagem do Integrante:</label>
            <input
              type="file"
              id="imagem"
              className="form-control"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="curriculo" className="form-label">Link para o currículo Lattes:</label>
            <input
              type="url"
              id="curriculo"
              className="form-control"
              value={curriculo}
              onChange={(e) => setCurriculo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="papel" className="form-label">Papel:</label>
            <select
              id="papel"
              className="form-select"
              value={papel}
              onChange={(e) => setPapel(e.target.value)}
              required
            >
              <option value="Selecione uma das opções">Selecione uma das opções</option>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Linhas de Pesquisa:</label>
            {pesquisas.map((pesquisa) => (
              <div key={pesquisa.id} className="form-check">
                <input
                  type="checkbox"
                  id={`pesquisa-${pesquisa.id}`}
                  className="form-check-input"
                  checked={linhasPesquisa.includes(pesquisa.id)}
                  onChange={(e) => {
                    const pesquisaId = pesquisa.id;
                    if (e.target.checked) {
                      setLinhasPesquisa((prevLinhasPesquisa) => [...prevLinhasPesquisa, pesquisaId]);
                    } else {
                      setLinhasPesquisa((prevLinhasPesquisa) => prevLinhasPesquisa.filter(id => id !== pesquisaId));
                    }
                  }}
                />
                <label htmlFor={`pesquisa-${pesquisa.id}`} className="form-check-label">{pesquisa.nome}</label>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </main>
    </div>
  );
}

export default CriarIntegrante;
