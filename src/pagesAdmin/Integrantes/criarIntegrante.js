import React, { useState } from 'react';
import { useIntegrantes } from './integrantesContext';
import { usePesquisas } from '../Pesquisas/pesquisasContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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
const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage, 'imagens')

async function adicionarIntegrante(integrante) {
  try {
    const docRef = await addDoc(collection(db, "integrantes"), integrante);
    console.log("Documento criado com ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
}

function CriarIntegrante() {
  const { integrantes, setIntegrantes } = useIntegrantes();
  const { pesquisas } = usePesquisas();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);
  const [linhasPesquisa, setLinhasPesquisa] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null;

    if (imagem) {
      const imageRef = ref(storageRef, imagem.name);

      try {
        await uploadBytes(imageRef, imagem);
        imageUrl = await getDownloadURL(imageRef); // Alterado para getDownloadURL
      } catch (error) {
        console.error("Erro ao fazer o upload da imagem: " + error);
      }
    }

    const novoIntegrante = {
      nome: nome,
      curriculo: curriculo,
      email: email,
      papel: papel,
      imagem: imageUrl,
      pesquisas: linhasPesquisa,
    };

    adicionarIntegrante(novoIntegrante).then(result => {
      console.log(result);
    });

    navigate('/integrantesAdmin');
    alert("Integrante adicionado!")
  };

  return (
    <div className="container">
      <Header />
      <main className="maincontato">
        <h1 className="mb-4">Registrar Integrante</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="imagem" className="form-label">Imagem do Integrante:</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              id="imagem"
              className="form-control"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="curriculo" className="form-label">Link para o currículo Lattes:</label>
            <input
              type="url"
              id="curriculo"
              className="form-control"
              value={curriculo}
              onChange={(e) => setCurriculo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="papel" className="form-label">Papel:</label>
            <select
              id="papel"
              className="form-select"
              value={papel}
              onChange={(e) => setPapel(e.target.value)}
              required
            >
              <option value="Selecione uma das opções">Selecione uma das opções</option>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Linhas de Pesquisa:</label>
            {pesquisas.map((pesquisa) => (
              <div key={pesquisa.id} className="form-check">
                <input
                  type="checkbox"
                  id={`pesquisa-${pesquisa.id}`}
                  className="form-check-input"
                  checked={linhasPesquisa.includes(pesquisa.id)}
                  onChange={(e) => {
                    const pesquisaId = pesquisa.id;
                    if (e.target.checked) {
                      setLinhasPesquisa((prevLinhasPesquisa) => [...prevLinhasPesquisa, pesquisaId]);
                    } else {
                      setLinhasPesquisa((prevLinhasPesquisa) => prevLinhasPesquisa.filter(id => id !== pesquisaId));
                    }
                  }}
                />
                <label htmlFor={`pesquisa-${pesquisa.id}`} className="form-check-label">{pesquisa.nome}</label>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </main>
    </div>
  );
}

export default CriarIntegrante;
