import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntegrantes } from './integrantesContext';
import { usePesquisas } from '../Pesquisas/pesquisasContext';

function EditarIntegrante() {
  const { integrantes, setIntegrantes } = useIntegrantes();
  const { pesquisas } = usePesquisas();
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);
  const [pesquisasAssociadas, setPesquisasAssociadas] = useState([]);

  useEffect(() => {
    const integrante = integrantes.find((integrante) => integrante.id === parseInt(id));
    if (integrante) {
      setNome(integrante.nome);
      setCurriculo(integrante.curriculo);
      setEmail(integrante.email);
      setPapel(integrante.papel);
      setImagem(integrante.imagem);
      setPesquisasAssociadas(integrante.pesquisas || []);
    }
  }, [integrantes, id]);

  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
  
    if (newImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagem(e.target.result);
      };
      reader.readAsDataURL(newImage);
    } else {
      setImagem(null);
    }
  };
  
  
  

  const handlePesquisaToggle = (pesquisaId) => {
    setPesquisasAssociadas((prevPesquisasAssociadas) => {
      if (prevPesquisasAssociadas.includes(pesquisaId)) {
        return prevPesquisasAssociadas.filter((id) => id !== pesquisaId);
      } else {
        return [...prevPesquisasAssociadas, pesquisaId];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const integranteAtualizado = {
      id: parseInt(id),
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
      imagem: imagem,
      pesquisas: pesquisasAssociadas,
    };

    const novosIntegrantes = integrantes.map((integrante) =>
      integrante.id === parseInt(id) ? integranteAtualizado : integrante
    );

    setIntegrantes(novosIntegrantes);
    navigate('/integrantesAdmin');
  };

  return (
    <div className="container">
      <main className="maincontato">
        <h1 className="mb-4">Editar Integrante</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">
            Imagem do Integrante:
          </label>
          <input
            type="file"
            id="imagem"
            className="form-control"
            onChange={handleImageChange}
          />
          {imagem ? (
            <img
              src={imagem instanceof File ? URL.createObjectURL(imagem) : imagem}
              alt={`Foto de ${nome}`}
            />
          ) : null}
        </div>
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
            <label className="form-label">Pesquisas Associadas:</label>
            <div>
              {pesquisas.map((pesquisa) => (
                <div key={pesquisa.id} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`pesquisa-${pesquisa.id}`}
                    value={pesquisa.id}
                    checked={pesquisasAssociadas.includes(pesquisa.id)}
                    onChange={() => handlePesquisaToggle(pesquisa.id)}
                  />
                  <label className="form-check-label" htmlFor={`pesquisa-${pesquisa.id}`}>
                    {pesquisa.nome}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarIntegrante;
