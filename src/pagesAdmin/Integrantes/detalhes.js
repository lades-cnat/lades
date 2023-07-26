import React, { useState } from 'react';

function CadaIntegrante({ nome, curriculo, email, papel, imagem, onDetalhar, onRemover, onEditar }) {
  const [detalhado, setDetalhado] = useState(false);

  const handleDetalharClick = () => {
    setDetalhado(!detalhado);
  };

  return (
    <div>
      <h3>{nome}</h3>
      <button onClick={handleDetalharClick}>{detalhado ? 'Esconder Detalhes' : 'Detalhar'}</button>
      <button onClick={onEditar}>Editar</button>
      <button onClick={onRemover}>Remover</button>
      {detalhado && (
        <div>
          <p>Curriculum Lattes: {curriculo}</p>
          <p>Email: {email}</p>
          <p>Papel: {papel}</p>
          <p>Foto Perfil: {imagem && <img src={URL.createObjectURL(imagem)} alt={`Foto de ${nome}`} style={{ width: '100px' }} />}</p>
        </div>
      )}
    </div>
  );
}

function DetalhesIntegrantes({ integrantes, onDetalhar, onRemover, onEditar, setIntegrantes }) {
  const [editandoId, setEditandoId] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [curriculoEditado, setCurriculoEditado] = useState('');
  const [emailEditado, setEmailEditado] = useState('');
  const [papelEditado, setPapelEditado] = useState('');
  const [imagemEditada, setImagemEditada] = useState(null);

  const handleRemover = (id) => {
    // Remove the integrante from the list
    const novosIntegrantes = integrantes.filter((integrante) => integrante.id !== id);
    setIntegrantes(novosIntegrantes);
  };

  const handleEditar = (id) => {
    const integrante = integrantes.find((integrante) => integrante.id === id);
    setEditandoId(id);
    setNomeEditado(integrante.nome);
    setCurriculoEditado(integrante.curriculo);
    setEmailEditado(integrante.email);
    setPapelEditado(integrante.papel);
    setImagemEditada(integrante.imagem);
  };

  const handleSalvarEdicao = (id) => {
    // Atualiza o integrante na lista de integrantes
    const novosIntegrantes = integrantes.map((integrante) =>
      integrante.id === id
        ? {
            ...integrante,
            nome: nomeEditado,
            curriculo: curriculoEditado,
            email: emailEditado,
            papel: papelEditado,
            imagem: imagemEditada,
          }
        : integrante
    );
    setIntegrantes(novosIntegrantes);
    setEditandoId(null);
  };

  const handleCancelarEdicao = () => {
    setEditandoId(null);
  };

  return (
    <div>
      <h2>Lista de Integrantes</h2>
      {integrantes.map((integrante) => (
        <div key={integrante.id}>
          {editandoId === integrante.id ? (
            <div>
              <h3>Editando: {integrante.nome}</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="nome">Nome: </label>
                  <input
                    type="text"
                    id="nome"
                    value={nomeEditado}
                    onChange={(e) => setNomeEditado(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="curriculo">Link para o currículo Lattes: </label>
                  <input
                    type="url"
                    id="curriculo"
                    value={curriculoEditado}
                    onChange={(e) => setCurriculoEditado(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    id="email"
                    value={emailEditado}
                    onChange={(e) => setEmailEditado(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="papel">Papel: </label>
                  <select
                    id="papel"
                    value={papelEditado}
                    onChange={(e) => setPapelEditado(e.target.value)}
                  >
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
                    onChange={(e) => setImagemEditada(e.target.files[0])}
                  />
                </div>
                <button onClick={() => handleSalvarEdicao(integrante.id)}>Salvar</button>
                <button onClick={handleCancelarEdicao}>Cancelar</button>
              </form>
            </div>
          ) : (
            <CadaIntegrante
              nome={integrante.nome}
              curriculo={integrante.curriculo}
              email={integrante.email}
              papel={integrante.papel}
              imagem={integrante.imagem} // Incluímos a imagem aqui
              onDetalhar={() => onDetalhar(integrante.id)}
              onRemover={() => handleRemover(integrante.id)}
              onEditar={() => handleEditar(integrante.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default DetalhesIntegrantes;
