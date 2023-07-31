import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
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
        <h1>Lista de Integrantes</h1>
        <Link to="/integrantesCriar">Registrar novo integrante</Link>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Curriculum Lattes</th>
              <th>Email</th>
              <th>Papel</th>
              <th>Foto Perfil</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {integrantes.map((integrante) => (
              <tr key={integrante.id}>
                <td>{integrante.nome}</td>
                <td>{integrante.curriculo}</td>
                <td>{integrante.email}</td>
                <td>{integrante.papel}</td>
                <td>{integrante.imagem && <img src={URL.createObjectURL(integrante.imagem)} alt={`Foto de ${integrante.nome}`} style={{ width: '100px' }} />}</td>
                <td>
                  <button onClick={() => handleRemoverIntegrante(integrante.id)}>Remover</button>
                </td>
                <td>
                  <Link to={`/integrantesEditar/${integrante.id}`}>Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default Integrantes;
