import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Integrantes.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { Link } from 'react-router-dom';
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

function Integrantes() {
  const [integrantes, setIntegrantes] = useState([]);
  const [linhasPesquisa, setLinhasPesquisa] = useState([]);
  const [novoIntegrante, setNovoIntegrante] = useState({
    id: '',
    nome: '',
    curriculo: '',
    email: '',
    papel: 'Pesquisador',
    linhasPesquisa: '',
    imagem: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const integranteRef = ref(database, 'integrantes');

    onValue(integranteRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const integrantesArray = Object.values(data);
        setIntegrantes(integrantesArray);
      }
    });
  }, []);

  useEffect(() => {
    const linhasPesquisaRef = ref(database, 'pesquisas');
  
    onValue(linhasPesquisaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const linhasPesquisaArray = Object.values(data);
        setLinhasPesquisa(linhasPesquisaArray);
      }
    });
  }, []);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoIntegrante({ ...novoIntegrante, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateURL = (url) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageId = uuidv4();
      const imageRef = storageRef(storage, `imagens/${imageId}`);

      try {
        await uploadBytes(imageRef, file);

        const imageUrl = await getDownloadURL(imageRef);
        setNovoIntegrante({ ...novoIntegrante, imagem: imageUrl });
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
      }
    }
  };

  const handleAddIntegrante = () => {
    const newErrors = {};

    if (!novoIntegrante.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.';
    }

    if (!validateEmail(novoIntegrante.email)) {
      newErrors.email = 'Digite um email válido.';
    }

    if (novoIntegrante.curriculo && !validateURL(novoIntegrante.curriculo)) {
      newErrors.curriculo = 'Digite uma URL válida para o currículo.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const newIntegrante = { ...novoIntegrante, id: uuidv4() };

      setIntegrantes([...integrantes, newIntegrante]);

      const integranteRef = ref(database, `integrantes/${newIntegrante.id}`);
      set(integranteRef, newIntegrante);

      setNovoIntegrante({
        id: '',
        nome: '',
        curriculo: '',
        email: '',
        papel: 'Pesquisador',
        linhasPesquisa: '',
        imagem: '',
      });
      setErrors({});
    }
  };

  const handleDeleteIntegrante = async (integranteId, imageUrl) => {
    if (imageUrl) {
      try {
        const imageRef = storageRef(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (error) {
        console.error('Erro ao excluir imagem do Firebase Storage:', error);
      }
    }

    const updatedIntegrantes = integrantes.filter((integrante) => integrante.id !== integranteId);
    setIntegrantes(updatedIntegrantes);

    const integranteRef = ref(database, `integrantes/${integranteId}`);

    remove(integranteRef).then(() => {
      console.log("Integrante removido")
    }).catch ((error) => {
      console.error("Erro: ", error)
    })

    // Redefina os campos e os erros
    setNovoIntegrante({
      id: '',
      nome: '',
      curriculo: '',
      email: '',
      papel: 'Pesquisador',
      linhasPesquisa: '',
      imagem: '',
    });
    setErrors({});
  };

  return (
    <div className="integrantes-container">
      <Navbar />
      <h1>Integrantes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curriculo</th>
            <th>Email</th>
            <th>Papel</th>
            <th>Linhas de Pesquisa</th>
            <th>Imagem</th>
            <th>Edição</th>
            <th>Exclusão</th>
          </tr>
        </thead>
        <tbody>
          {integrantes.map((integrante) => (
            <tr key={integrante.id}>
              <td>{integrante.nome}</td>
              <td>{integrante.curriculo}</td>
              <td>{integrante.email}</td>
              <td>{integrante.papel}</td>
              <td>{integrante.linhasPesquisa}</td>
              <td>
                {integrante.imagem && (
                  <img src={integrante.imagem} alt={`Imagem de ${integrante.nome}`} />
                )}
              </td>
              <td>
                <Link to={`/adm/integrantes/editar/${integrante.id}`}>
                  <button type="button">Editar</button>
                </Link>
              </td>
              <td>
                <button
                  className="delete"
                  type="button"
                  onClick={() => handleDeleteIntegrante(integrante.id, integrante.imagem)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Adicionar Novo Integrante</h2>
      <form>
        <label>
          Nome:
        </label>
        <input
          type="text"
          name="nome"
          value={novoIntegrante.nome}
          onChange={handleChange}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}
        <label>
          Curriculo:
        </label>
        <input
          type="url"
          name="curriculo"
          value={novoIntegrante.curriculo}
          onChange={handleChange}
        />
        {errors.curriculo && <span className="error">{errors.curriculo}</span>}
        <label>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={novoIntegrante.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label>
          Papel:
        </label>
        <select
          name="papel"
          value={novoIntegrante.papel}
          onChange={handleChange}
        >
          <option value="Pesquisador">Pesquisador</option>
          <option value="Colaborador">Colaborador</option>
          <option value="Técnico">Técnico</option>
          <option value="Estudante">Estudante</option>
          <option value="Líder">Líder</option>
        </select>
        <label>
          Linha de Pesquisa:
        </label>
        <select
          name="linhasPesquisa"
          value={novoIntegrante.linhasPesquisa}
          onChange={handleChange}
        >
          <option value="">Selecione uma linha de pesquisa</option>
          {linhasPesquisa.map((linha) => (
            <option key={linha.id} value={linha.nome}>
              {linha.nome}
            </option>
          ))}
        </select>
        <label>
          Imagem:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {novoIntegrante.imagem && (
          <img src={novoIntegrante.imagem} alt={`Imagem de ${novoIntegrante.nome}`} />
        )}
        <button type="button" onClick={handleAddIntegrante}>
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Integrantes;