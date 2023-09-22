import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './EditarProjeto.css';

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

function EditarProjeto() {
  const { id } = useParams();
  const [projeto, setProjeto] = useState({});
  const [edicaoProjeto, setEdicaoProjeto] = useState({
    titulo: '',
    resumo: '',
    dataInicio: '',
    dataFim: '',
    integrantes: [],
  });
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    const projetoRef = ref(database, `projetos/${id}`);

    onValue(projetoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setProjeto(data);

        setEdicaoProjeto({
          titulo: data.titulo,
          resumo: data.resumo || '',
          dataInicio: data.dataInicio || '',
          dataFim: data.dataFim || '',
          integrantes: data.integrantes || [],
        });
      }
    });

    // Carregar a lista de todos os integrantes do Firebase
    const integrantesRef = ref(database, 'integrantes');

    onValue(integrantesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const integrantesArray = Object.values(data);
        setIntegrantes(integrantesArray);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdicaoProjeto({ ...edicaoProjeto, [name]: value });
  };

  const handleIntegranteCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const integrantesSelecionados = edicaoProjeto.integrantes.slice();

    if (checked) {
      integrantesSelecionados.push(name);
    } else {
      const index = integrantesSelecionados.indexOf(name);
      if (index !== -1) {
        integrantesSelecionados.splice(index, 1);
      }
    }

    setEdicaoProjeto({ ...edicaoProjeto, integrantes: integrantesSelecionados });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!edicaoProjeto.dataFim) {
        edicaoProjeto.dataFim = 'Em andamento';
    }

    await update(ref(database, `projetos/${id}`), edicaoProjeto);

    // Redirecionar para a página de projetos após a edição
    window.location.href = '/adm/projetos';
  };

  return (
    <div className="editar-projeto-container">
      <h1>Editar Projeto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={edicaoProjeto.titulo}
            onChange={handleChange}
          />
        </label>
        <label>
          Resumo: <br />
          <textarea
            name="resumo"
            value={edicaoProjeto.resumo}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Início:
          <input
            type="date"
            name="dataInicio"
            value={edicaoProjeto.dataInicio}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Fim (opcional):
          <input
            type="date"
            name="dataFim"
            value={edicaoProjeto.dataFim}
            onChange={handleChange}
          />
        </label>
        <label>
          Integrantes:
        </label>
        {integrantes.map((integrante) => (
          <label key={integrante.id} className="integrantes-list-projetos">
            {integrante.nome}
            <input
              type="checkbox"
              name={integrante.nome}
              checked={edicaoProjeto.integrantes.includes(integrante.nome)}
              onChange={handleIntegranteCheckboxChange}
            />
          </label>
        ))}
        <button type="submit">Salvar Edições</button>
      </form>
    </div>
  );
}

export default EditarProjeto;
