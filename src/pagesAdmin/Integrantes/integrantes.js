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

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoIntegrante = {
      id: Date.now(),
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
    };
    setIntegrantes([...integrantes, novoIntegrante]);
    console.log('Dados do formulário de integrante:', { nome, curriculo, email, papel });
  };

  const handleDetalharIntegrante = (id) => {
    console.log('Detalhar integrante com id:', id);
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1>Registrar Integrante</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome (obrigatório):</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="curriculo">Link para o currículo Lattes (opcional):</label>
            <input
              type="url"
              id="curriculo"
              value={curriculo}
              onChange={(e) => setCurriculo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email (obrigatório):</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="papel">Papel (obrigatório):</label>
            <select id="papel" value={papel} onChange={(e) => setPapel(e.target.value)} required>
              <option value="">Selecione um papel</option>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </main>
      <aside>
        <DetalhesIntegrantes integrantes={integrantes} onDetalhar={handleDetalharIntegrante} />
      </aside>
      <Footer />
    </div>
  );
}

export default Integrantes;
