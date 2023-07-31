import React, { useState } from 'react';
import { useIntegrantes } from './integrantesContext';
import { useNavigate } from 'react-router-dom'; 

function CriarIntegrante() {
  const { integrantes, setIntegrantes } = useIntegrantes();
  const navigate = useNavigate(); 

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
      imagem: imagem,
    };
    setIntegrantes([...integrantes, novoIntegrante]);
    console.log('Dados do formulário de integrante:', { nome, curriculo, email, papel, imagem });

    setNome('');
    setCurriculo('');
    setEmail('');
    setPapel('');
    setImagem(null);
    navigate('/integrantesAdmin'); 
  };
  
    return (
      <div className="container">
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
      </div>
    );
  }
  
  export default CriarIntegrante;
  
