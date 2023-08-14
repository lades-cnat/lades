import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { useIntegrantes } from './integrantesContext';

function Integrantes() {
  const { integrantes, setIntegrantes } = useIntegrantes();

  const handleRemoverIntegrante = (id) => {
    const shouldRemove = window.confirm('Tem certeza que deseja remover este integrante?');
    if (shouldRemove) {
      const novosIntegrantes = integrantes.filter((integrante) => integrante.id !== id);
      setIntegrantes(novosIntegrantes);
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1 className="mb-4">Lista de Integrantes</h1>
        <Link to="/integrantesCriar" className="mb-3 btn btn-primary">Registrar novo integrante</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Foto Perfil</th>
              <th>Nome</th>
              <th>Curriculum Lattes</th>
              <th>Email</th>
              <th>Papel</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {integrantes.map((integrante) => (
              <tr key={integrante.id}>
                <td>
                  {integrante.imagem && (
                    <img
                      src={
                        integrante.imagem instanceof File
                          ? URL.createObjectURL(integrante.imagem)
                          : integrante.imagem
                      }
                      alt={`Foto de ${integrante.nome}`}
                      style={{ width: '100px' }}
                    />
                  )}
                </td>
                <td>{integrante.nome}</td>
                <td>{integrante.curriculo}</td>
                <td>{integrante.email}</td>
                <td>{integrante.papel}</td>
                <td>
                  <button onClick={() => handleRemoverIntegrante(integrante.id)} className="btn btn-danger">Remover</button>
                </td>
                <td>
                  <Link to={`/integrantesEditar/${integrante.id}`} className="btn btn-primary">Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Integrantes;
