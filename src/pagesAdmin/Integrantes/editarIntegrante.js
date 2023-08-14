import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { useIntegrantes } from './integrantesContext';

function EditarIntegrante() {
  const { integrantes, setIntegrantes } = useIntegrantes();
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    const integrante = integrantes.find((integrante) => integrante.id === parseInt(id));
    if (integrante) {
      setNome(integrante.nome);
      setCurriculo(integrante.curriculo);
      setEmail(integrante.email);
      setPapel(integrante.papel);
      setImagem(integrante.imagem);
    }
  }, [integrantes, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const integranteAtualizado = {
      id: parseInt(id),
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
      imagem: imagem,
    };
    const novosIntegrantes = integrantes.map((integrante) =>
      integrante.id === parseInt(id) ? integranteAtualizado : integrante
    );
    setIntegrantes(novosIntegrantes);
    console.log('Dados do formulário de integrante atualizado:', integranteAtualizado);
    navigate('/integrantesAdmin');
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Editar Integrante</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="curriculo" className="form-label">Link para o currículo Lattes:</label>
            <input type="url" className="form-control" id="curriculo" value={curriculo} onChange={(e) => setCurriculo(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="papel" className="form-label">Papel:</label>
            <select id="papel" className="form-select" value={papel} onChange={(e) => setPapel(e.target.value)} required>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="imagem" className="form-label">Imagem do Integrante:</label>
            <input type="file" className="form-control" id="imagem" onChange={(e) => setImagem(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarIntegrante;
