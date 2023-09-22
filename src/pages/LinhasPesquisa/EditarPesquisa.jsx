import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../Integrantes/Editar.css';

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

function EditarPesquisa() {
  const { id } = useParams();
  const [pesquisa, setPesquisa] = useState({});
  const [edicaoPesquisa, setEdicaoPesquisa] = useState({
    nome: '',
    descricao: '',
    imagem: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const pesquisaRef = ref(database, `pesquisas/${id}`);

    onValue(pesquisaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPesquisa(data);

        setEdicaoPesquisa({
          nome: data.nome,
          descricao: data.descricao || '',
          imagem: data.imagem || '',
        });

        setImagePreview(data.imagem);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdicaoPesquisa({ ...edicaoPesquisa, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageId = id;
      const imageRef = storageRef(storage, `pesquisas/${imageId}`);

      try {
        await uploadBytes(imageRef, file);

        const imageUrl = await getDownloadURL(imageRef);

        setEdicaoPesquisa({ ...edicaoPesquisa, imagem: imageUrl });

      
        setImagePreview(URL.createObjectURL(file));
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await update(ref(database, `pesquisas/${id}`), edicaoPesquisa);

  
    window.location.href = `/adm/linhasPesquisa`;
  };

  return (
    <div className="editar-container">
      <h1>Editar Pesquisa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={edicaoPesquisa.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={edicaoPesquisa.descricao}
            onChange={handleChange}
          />
        </label>
        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt={`Imagem de ${edicaoPesquisa.nome}`}
              className="imagem-preview"
            />
          )}
        </label>
        <button type="submit">Salvar Edições</button>
      </form>
    </div>
  );
}

export default EditarPesquisa;