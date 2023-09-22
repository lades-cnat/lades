import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, set, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './Editar.css';
import { getStorage, ref as storageRef, uploadString, getDownloadURL } from 'firebase/storage';

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

function Editar() {
  const { id } = useParams();
  const [integrante, setIntegrante] = useState({});
  const [linhasPesquisaOptions, setLinhasPesquisaOptions] = useState([]);
  const [edicaoIntegrante, setEdicaoIntegrante] = useState({
    nome: '',
    curriculo: '',
    email: '',
    papel: 'Pesquisador',
    linhasPesquisa: '',
    imagem: '',
  });

  const [imagePreview, setImagePreview] = useState(
    integrante && integrante.imagem || ''
  );
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        try {
          const imageUrl = event.target.result;
          const base64String = imageUrl.slice(imageUrl.indexOf(',') + 1);
  
          setImagePreview(imageUrl);
          setEdicaoIntegrante({ ...edicaoIntegrante, imagem: base64String });
        } catch (error) {
          console.error('Erro ao converter a imagem:', error);
        }
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  useEffect(() => {
    const integranteRef = ref(database, `integrantes/${id}`);
  
    onValue(integranteRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setIntegrante(data);
  
        setEdicaoIntegrante({
          nome: data.nome,
          curriculo: data.curriculo || '',
          email: data.email,
          papel: data.papel || 'Pesquisador',
          linhasPesquisa: data.linhasPesquisa || '',
          imagem: data.imagem || '',
        });
  
        setImagePreview(data.imagem);
      }
    });
  }, [id]);

  useEffect(() => {
    const linhasPesquisaRef = ref(database, 'pesquisas');
  
    onValue(linhasPesquisaRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const linhasPesquisaArray = Object.values(data);
        setLinhasPesquisaOptions(linhasPesquisaArray);
      }
    });
  }, []);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdicaoIntegrante({ ...edicaoIntegrante, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edicaoIntegrante.imagem !== imagePreview) {
      try {
        const storageIntegranteRef = storageRef(storage, `integrantes/${id}`);
        await uploadString(storageIntegranteRef, imagePreview, 'data_url');

        const imageUrl = await getDownloadURL(storageIntegranteRef);

        await update(ref(database, `integrantes/${id}`), { ...edicaoIntegrante, imagem: imageUrl });
      } catch (error) {
        console.error('Erro ao enviar a nova imagem:', error);
      }
    } else {
      await update(ref(database, `integrantes/${id}`), edicaoIntegrante);
    }

    window.location.href = `/adm/integrantes`;
  };

  return (
    <div className="editar-container">
      <h1>Editar Integrante</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={edicaoIntegrante.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          Currículo (URL):
          <input
            type="url"
            name="curriculo"
            value={edicaoIntegrante.curriculo}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={edicaoIntegrante.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Papel: <br />
          <select
            name="papel"
            value={edicaoIntegrante.papel}
            onChange={handleChange}
          >
            <option value="Pesquisador">Pesquisador</option>
            <option value="Colaborador">Colaborador</option>
            <option value="Técnico">Técnico</option>
            <option value="Estudante">Estudante</option>
            <option value="Líder">Líder</option>
          </select>
        </label>
        <label>
          Linha de Pesquisa:
        </label>
        <select
          name="linhasPesquisa"
          value={edicaoIntegrante.linhasPesquisa}
          onChange={handleChange}
        >
          <option value="">Selecione uma linha de pesquisa</option>
          {linhasPesquisaOptions.map((linha) => (
            <option key={linha.id} value={linha.nome}>
              {linha.nome}
            </option>
          ))}
        </select>
        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="imagemInput"
            onChange={handleImageChange}
          />
          <img
            src={imagePreview}
            alt={`Imagem de ${edicaoIntegrante.nome}`}
            className="imagem-preview"
          />
        </label>
        <button type="submit">Salvar Edições</button>
      </form>
    </div>
  );
}

export default Editar;