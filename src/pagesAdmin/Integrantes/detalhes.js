import React from 'react';

function CadaIntegrante({ nome, curriculo, email, papel, onClick }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Curriculum Lattes: {curriculo}</p>
      <p>Email: {email}</p>
      <p>Papel: {papel}</p>
      <button onClick={onClick}>Detalhar</button>
    </div>
  );
}

function DetalhesIntegrantes({ integrantes, onDetalhar }) {
  return (
    <div>
      <h2>Lista de Integrantes</h2>
      {integrantes.map((integrante) => (
        <CadaIntegrante
          key={integrante.id}
          nome={integrante.nome}
          curriculo={integrante.curriculo}
          email={integrante.email}
          papel={integrante.papel}
          onClick={() => onDetalhar(integrante.id)}
        />
      ))}
    </div>
  );
}

export default DetalhesIntegrantes;
