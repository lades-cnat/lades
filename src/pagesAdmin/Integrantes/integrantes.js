import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { usePesquisas } from '../Pesquisas/pesquisasContext';

import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, getDocs } from "firebase/firestore"; 

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

async function removerIntegrante(id) {
  console.log(id)
  await deleteDoc(doc(db, "integrantes", id));
}

async function getIntegrantes() {
  const querySnapshot = await getDocs(collection(db, "integrantes"));
  const integrantesArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return integrantesArray;
}

function Integrantes() {
  const { pesquisas } = usePesquisas();
  const [integrantesArray, setIntegrantesArray] = useState([]);

  const handleRemoverIntegrante = async (id) => {
    const shouldRemove = window.confirm('Tem certeza que deseja remover este integrante?');
    if (shouldRemove) {
      await removerIntegrante(id);
      setIntegrantesArray(integrantesArray.filter(integrante => integrante.id !== id));
    }
  };  

  const getLinhasPesquisa = (linhaIds) => {
    if (!linhaIds || linhaIds.length === 0) {
      return 'Nenhuma linha de pesquisa associada';
    }
  
    return linhaIds.map(linhaId => {
      const linhaPesquisa = pesquisas.find(pesquisa => pesquisa.id === linhaId);
      return linhaPesquisa ? linhaPesquisa.nome : 'Linha de Pesquisa não encontrada';
    }).join(', ');
  }

  useEffect(() => {
    async function fetchData() {
      const integrantesData = await getIntegrantes();
      setIntegrantesArray(integrantesData);
    }

    fetchData();
  }, []);

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
              <th>Linhas de Pesquisa</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {integrantesArray.map((doc) => (
              <tr key={doc.id}>
                <td>
                  {doc.imagem && (
                    <img
                      src={
                        doc.imagem instanceof File
                          ? URL.createObjectURL(doc.imagem)
                          : doc.imagem
                      }
                      alt={`Foto de ${doc.nome}`}
                      style={{ width: '100px' }}
                    />
                  )}
                </td>
                <td>{doc.nome}</td>
                <td>{doc.curriculo}</td>
                <td>{doc.email}</td>
                <td>{doc.papel}</td>
                <td>{getLinhasPesquisa(doc.pesquisas || [])}</td>
                <td>
                  <button onClick={() => handleRemoverIntegrante(doc.id)} className="btn btn-danger">Remover</button>
                </td>
                <td>
                  <Link to={`/integrantesEditar/${doc.id}`} className="btn btn-primary">Editar</Link>
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
