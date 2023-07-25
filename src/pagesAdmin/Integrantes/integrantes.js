import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../Pesquisas/pesquisas.css';
import DetalhesIntegrantes from './detalhes';

function Integrantes() {
  const [integrantes, setIntegrantes] = useState([]);
  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoIntegrante = {
      id: Date.now(),
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
      imagem: imagem, // Incluímos a imagem aqui
    };
    setIntegrantes([...integrantes, novoIntegrante]);
    console.log('Dados do formulário de integrante:', { nome, curriculo, email, papel, imagem });
    // Limpamos os campos após o registro
    setNome('');
    setCurriculo('');
    setEmail('');
    setPapel('');
    setImagem(null);
  };

  const handleDetalharIntegrante = (id) => {
    console.log('Detalhar integrante com id:', id);
  };

  const handleRemoverIntegrante = (id) => {
    const novosIntegrantes = integrantes.filter((integrante) => integrante.id !== id);
    setIntegrantes(novosIntegrantes);
  };

  const handleEditarIntegrante = (id, novoIntegrante) => {
    const novosIntegrantes = integrantes.map((integrante) =>
      integrante.id === id ? { ...integrante, ...novoIntegrante } : integrante
    );
    setIntegrantes(novosIntegrantes);
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1>Registrar Integrante</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="curriculo">Link para o currículo Lattes: </label>
            <input
              type="url"
              id="curriculo"
              value={curriculo}
              onChange={(e) => setCurriculo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="papel">Papel: </label>
            <select id="papel" value={papel} onChange={(e) => setPapel(e.target.value)} required>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>
          <div>
            <label htmlFor="imagem">Imagem do Integrante: </label>
            <input
              type="file"
              id="imagem"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </main>
      <aside>
        <DetalhesIntegrantes
          integrantes={integrantes}
          onDetalhar={handleDetalharIntegrante}
          onRemover={handleRemoverIntegrante}
          onEditar={handleEditarIntegrante}
          setIntegrantes={setIntegrantes}
        />
      </aside>
      <Footer />
    </div>
  );
}

export default Integrantes;
