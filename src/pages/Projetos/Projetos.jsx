import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import './Projetos.css';
import Navbar from '../Nav';

const firebaseConfig = {
    apiKey: "AIzaSyDaxheNI71AxVuZb7uL2hj2FTPJvIPttOM",
    authDomain: "lades-database.firebaseapp.com",
    databaseURL: "https://lades-database-default-rtdb.firebaseio.com",
    projectId: "lades-database",
    storageBucket: "lades-database.appspot.com",
    messagingSenderId: "485836266879",
    appId: "1:485836266879:web:af4406cbaebf57762b4e4a",
    measurementId: "G-H910BW4N3P"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [integrantes, setIntegrantes] = useState([]);
  const [novoProjeto, setNovoProjeto] = useState({
    id: '',
    titulo: '',
    resumo: '',
    dataInicio: '',
    dataFim: '',
    integrantes: [],
  });

  useEffect(() => {
    // Carregar a lista de projetos do Firebase
    const projetosRef = ref(database, 'projetos');

    onValue(projetosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const projetosArray = Object.values(data);
        setProjetos(projetosArray);
      }
    });

    // Carregar a lista de integrantes do Firebase
    const integrantesRef = ref(database, 'integrantes');

    onValue(integrantesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const integrantesArray = Object.values(data);
        setIntegrantes(integrantesArray);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProjeto({ ...novoProjeto, [name]: value });
  };

  const handleIntegranteCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const integrantesSelecionados = novoProjeto.integrantes.slice();

    if (checked) {
      integrantesSelecionados.push(name);
    } else {
      const index = integrantesSelecionados.indexOf(name);
      if (index !== -1) {
        integrantesSelecionados.splice(index, 1);
      }
    }

    setNovoProjeto({ ...novoProjeto, integrantes: integrantesSelecionados });
  };

  const handleAddProjeto = () => {
    const newProjeto = { ...novoProjeto, id: uuidv4() };

    // Definir a data de fim como "Em andamento" se não for especificada
    if (!newProjeto.dataFim) {
      newProjeto.dataFim = 'Em andamento';
    }

    setProjetos([...projetos, newProjeto]);

    const projetoRef = ref(database, `projetos/${newProjeto.id}`);
    set(projetoRef, newProjeto);

    setNovoProjeto({
      id: '',
      titulo: '',
      resumo: '',
      dataInicio: '',
      dataFim: '',
      integrantes: [],
    });
  };

  const handleDeleteProjeto = async (projetoId) => {
    // Excluir o projeto do Firebase Realtime Database
    const projetoRef = ref(database, `projetos/${projetoId}`);
    remove(projetoRef);

    // Excluir a imagem do Firebase Storage (se houver)
    const projeto = projetos.find((p) => p.id === projetoId);
    if (projeto && projeto.imagem) {
      const imageRef = storageRef(storage, projeto.imagem);
      await deleteObject(imageRef);
    }

    // Atualizar o estado para refletir a exclusão
    const updatedProjetos = projetos.filter((proj) => proj.id !== projetoId);
    setProjetos(updatedProjetos);
  };

  return (
    <div className="projetos-container">
      <Navbar />
      <h1>Projetos</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Integrantes</th>
            <th>Edição</th>
            <th>Exclusão</th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto) => (
            <tr key={projeto.id}>
              <td>{projeto.titulo}</td>
              <td>{projeto.resumo}</td>
              <td>{projeto.dataInicio}</td>
              <td>{projeto.dataFim}</td>
              <td>{projeto.integrantes}</td>
              <td>
                <Link to={`/adm/projetos/editar/${projeto.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
              <td>
                <button className="delete" onClick={() => handleDeleteProjeto(projeto.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Adicionar Novo Projeto</h2>
      <form>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={novoProjeto.titulo}
            onChange={handleChange}
          />
        </label>
        <label>
          Resumo: <br />
          <textarea
            name="resumo"
            value={novoProjeto.resumo}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Início:
          <input
            type="date"
            name="dataInicio"
            value={novoProjeto.dataInicio}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Fim (opcional):
          <input
            type="date"
            name="dataFim"
            value={novoProjeto.dataFim}
            onChange={handleChange}
          />
        </label>
        <label>
          Integrantes:
        </label>
          {integrantes.map((integrante) => (
            <label className="integrantes-list-projetos" key={integrante.id}>
              {integrante.nome}
              <input
                  type="checkbox"
                  name={integrante.nome}
                  checked={novoProjeto.integrantes.includes(integrante.nome)}
                  onChange={handleIntegranteCheckboxChange}
              />
            </label>
          ))}
        <button type="button" onClick={handleAddProjeto}>
          Adicionar Projeto
        </button>
      </form>
    </div>
  );
}

export default Projetos;
