import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Pesquisas.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import Navbar from '../Nav';
import { Link } from 'react-router-dom';

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

function Pesquisas() {
  const [pesquisas, setPesquisas] = useState([]);
  const [novaPesquisa, setNovaPesquisa] = useState({
    id: '',
    nome: '',
    descricao: '',
    imagem: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const pesquisaRef = ref(database, 'pesquisas');

    onValue(pesquisaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const pesquisasArray = Object.values(data);
        setPesquisas(pesquisasArray);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaPesquisa({ ...novaPesquisa, [name]: value });
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
        setNovaPesquisa({ ...novaPesquisa, imagem: imageUrl });
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
      }
    }
  };

  const handleAddPesquisa = () => {
    const newErrors = {};

    if (!novaPesquisa.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.';
    }

    if (!novaPesquisa.descricao.trim()) {
      newErrors.descricao = 'A descrição é obrigatória.';
    }

    if (!validateURL(novaPesquisa.imagem)) {
      newErrors.imagem = 'Digite uma URL válida para a imagem.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const novaPesquisaComId = { ...novaPesquisa, id: uuidv4() };

      setPesquisas([...pesquisas, novaPesquisaComId]);

      const pesquisaRef = ref(database, `pesquisas/${novaPesquisaComId.id}`);
      set(pesquisaRef, novaPesquisaComId);

      setNovaPesquisa({
        id: '',
        nome: '',
        descricao: '',
        imagem: '',
      });
      setErrors({});
    }
  };

  const handleDeletePesquisa = async (pesquisaId, imageUrl) => {
    if (imageUrl) {
      try {
        const imageRef = storageRef(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (error) {
        console.error('Erro ao excluir imagem do Firebase Storage:', error);
      }
    }

    const pesquisasAtualizadas = pesquisas.filter((pesquisa) => pesquisa.id !== pesquisaId);
    setPesquisas(pesquisasAtualizadas);

    const pesquisaRef = ref(database, `pesquisas/${pesquisaId}`);

    remove(pesquisaRef).then(() => {
      console.log("Pesquisa removida");
    }).catch((error) => {
      console.error("Erro: ", error);
    });

    // Redefina os campos e os erros
    setNovaPesquisa({
      id: '',
      nome: '',
      descricao: '',
      imagem: '',
    });
    setErrors({});
  };

  return (
    <div className="pesquisas-container">
      <Navbar />
      <h1>Linhas de Pesquisa</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Edição</th>
            <th>Exclusão</th>
          </tr>
        </thead>
        <tbody>
          {pesquisas.map((pesquisa) => (
            <tr key={pesquisa.id}>
              <td>{pesquisa.nome}</td>
              <td>{pesquisa.descricao}</td>
              <td>
                {pesquisa.imagem && (
                  <img src={pesquisa.imagem} alt={`Imagem de ${pesquisa.nome}`} />
                )}
              </td>
              <td>
                <Link to={`/adm/linhasPesquisa/editar/${pesquisa.id}`}>
                  <button type="button">Editar</button>
                </Link>
              </td>
              <td>
                <button
                  className="delete"
                  type="button"
                  onClick={() => handleDeletePesquisa(pesquisa.id, pesquisa.imagem)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Adicionar Nova Pesquisa</h2>
      <form>
        <label>
          Nome:
        </label>
        <input
          type="text"
          name="nome"
          value={novaPesquisa.nome}
          onChange={handleChange}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}
        <label>
          Descrição:
        </label>
        <input
          type="text"
          name="descricao"
          value={novaPesquisa.descricao}
          onChange={handleChange}
        />
        {errors.descricao && <span className="error">{errors.descricao}</span>}
        {errors.imagem && <span className="error">{errors.imagem}</span>}
        <label>
          Carregar Imagem:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {novaPesquisa.imagem && (
          <img src={novaPesquisa.imagem} alt={`Imagem de ${novaPesquisa.nome}`} />
        )}
        <button type="button" onClick={handleAddPesquisa}>
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Pesquisas;
