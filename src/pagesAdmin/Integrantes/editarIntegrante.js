import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header';
import { initializeApp } from "firebase/app";
import { collection, setDoc, doc, getDoc, getFirestore } from "firebase/firestore"; 
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
const integrantesRef = collection(db, "integrantes")
const storage = getStorage();
const storageRef = ref(storage, 'imagens')

async function editarIntegrante(integranteId, novosDados) {
  try {
    const docRef = doc(db, "integrantes", integranteId);

    await setDoc(doc(integrantesRef, integranteId), novosDados);
    return docRef.id;
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
}

function EditarIntegrante() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [curriculo, setCurriculo] = useState('');
  const [email, setEmail] = useState('');
  const [papel, setPapel] = useState('');
  const [imagem, setImagem] = useState(null);
  const [linhasPesquisa, setLinhasPesquisa] = useState([]);

  useEffect( () => {
    async function getData() {
      let docRef = doc(db, "integrantes", id);
      const docSnap = await getDoc(docRef)
      const integrante = docSnap.data();
      if (docRef) {
        setNome(integrante.nome);
        setCurriculo(integrante.curriculo);
        setEmail(integrante.email);
        setPapel(integrante.papel);
        setImagem(integrante.imagem);
        setLinhasPesquisa(integrante.pesquisas || []);
      }
    }
    getData();
  }, [integrantesRef, id]);

  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
  
    if (newImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagem(e.target.result);
      };
      reader.readAsDataURL(newImage);
    } else {
      setImagem(null);
    }
  };
  
  
  

  const handlePesquisaToggle = (pesquisaId) => {
    setLinhasPesquisa((prevPesquisasAssociadas) => {
      if (prevPesquisasAssociadas.includes(pesquisaId)) {
        return prevPesquisasAssociadas.filter((id) => id !== pesquisaId);
      } else {
        return [...prevPesquisasAssociadas, pesquisaId];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null;

    if (imagem) {
      const imageRef = ref(storageRef, imagem.name);

      try {
        await uploadBytes(imageRef, imagem);
        imageUrl = await getDownloadURL(imageRef);
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

    editarIntegrante(id, novoIntegrante).then(result => {
      console.log(result);
    });

    navigate('/integrantesAdmin');
    alert("Integrante atualizado!")
  };

  return (
    <div className="container">
            <Header />
      <main className="maincontato">
        <h1 className="mb-4">Editar Integrante</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">
            Imagem do Integrante:
          </label>
          <input
            type="file"
            id="imagem"
            className="form-control"
            onChange={handleImageChange}
          />
          {imagem ? (
            <img
              src={imagem instanceof File ? URL.createObjectURL(imagem) : imagem}
              alt={`Foto de ${nome}`}
            />
          ) : null}
        </div>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="curriculo" className="form-label">Link para o currículo Lattes:</label>
            <input type="url" className="form-control" id="curriculo" value={curriculo} onChange={(e) => setCurriculo(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="papel" className="form-label">Papel:</label>
            <select id="papel" className="form-select" value={papel} onChange={(e) => setPapel(e.target.value)} required>
              <option value="pesquisador">Pesquisador</option>
              <option value="colaborador">Colaborador</option>
              <option value="técnico">Técnico</option>
              <option value="estudante">Estudante</option>
              <option value="lider">Líder</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EditarIntegrante;
