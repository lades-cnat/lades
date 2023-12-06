import '../css/projetos.css';
import '../css/slide.css';
import '../css/home.css';
import logo from '../assets/lades logo.svg';
import objetivo from '../assets/nossoobjetivo.png';
import logoif from '../assets/logoif.svg';
import ladesfooter from '../assets/ladesfooter.svg';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';
import { useState, useEffect } from 'react';


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

const projetosRef = ref(database, 'projetos');
const pesquisasRef = ref(database, 'pesquisas');
const integrantesRef = ref(database, 'integrantes');

async function contagem(tabela) {
  try {
    const snapshot = await get(tabela);
    let qtdDados = 0;

    snapshot.forEach((childSnapshot) => {
      qtdDados++;
    });

    return qtdDados;
  } catch (error) {
    console.error('Erro ao obter dados da tabela:', error);
    throw error;
  }
}

function Home() {
  const [qtdProjetos, setQtdProjetos] = useState(0);
  const [qtdPesquisas, setQtdPesquisas] = useState(0);
  const [qtdIntegrantes, setQtdIntegrantes] = useState(0);

useEffect(() => {
  const fetchAllData = async () => {
    try {
      const [projetos, pesquisas, integrantes] = await Promise.all([
        contagem(projetosRef),
        contagem(pesquisasRef),
        contagem(integrantesRef),
      ]);

      setQtdProjetos(projetos);
      setQtdPesquisas(pesquisas);
      setQtdIntegrantes(integrantes);
    } catch (error) {
      console.error(`Erro ao obter dados: ${error}`);
    }
  };

  fetchAllData();
}, []);

  return (
    <>
      <header>
        <nav>
        <a href = "/"> <img width="100px" src={logo} alt="logo lades" /></a>
          <ul>
            <li className="links">
              <a href="./sobre"> Sobre</a>
            </li>
            <li className="links">
              <a href="./pesquisadores"> Pesquisadores</a>
            </li>
            <li className="links">
              <a href="./linhasDePesquisa"> Pesquisas</a>
            </li>
            <li className="links">
              <a href="./projetos"> Projetos</a>
            </li>
            <li className="links">
              <a href="./contato"> Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="sectionone">
          <div>
            <h1>LABORATÓRIO DE <br /> DESENVOLVIMENTO DE SOFTWARE</h1>
            <p>
              Estamos comprometidos em promover a inovação <br /> e o avanço
              tecnológico por meio da pesquisa e do <br /> desenvolvimento de
              software.
            </p>
          </div>
        </section>

        <section className="objetivo">
          <div className="objetivo_geral">
            <div className="imagem_objetivo"></div>
            <div className="objetivo_txt">
              <h2>NOSSO OBJETIVO</h2>

              <p>
                O Lades tem como foco central o desenvolvimento de <br />{' '}
                ações que integram ensino, pesquisa e extensão, com <br />
                ênfase na criação de produtos de software inovadores, <br />
                pesquisa aplicada e parcerias estratégicas. Nosso objetivo{' '}
                <br /> é impulsionar o avanço tecnológico, formar
                profissionais <br /> qualificados e contribuir para o
                desenvolvimento da <br /> sociedade por meio do software.
              </p>
            </div>
          </div>
        </section>

        <h3> VENHA CONFERIR </h3>
        <section className="conferir">
          <div className="principal_conferir">
            <div>
              <h4> Equipe</h4>
              <p>
                Conheça os membros da <br /> nossa equipe
              </p>
            </div>

            <ul>
              <li>
                <p>Coordenadores</p>
              </li>
              <li>
                <p>Pesquisadores</p>
              </li>
              <li>
                <p>Estudantes</p>
              </li>
            </ul>
            <button> Veja mais&nbsp;<span>→</span> </button>
          </div>

          <div className="principal_conferir">
            <div>
              <h4> Equipe</h4>
              <p>
                Conheça os membros da <br /> nossa equipe
              </p>
            </div>

            <ul>
              <li>
                <p>Coordenadores</p>
              </li>
              <li>
                <p>Pesquisadores</p>
              </li>
              <li>
                <p>Estudantes</p>
              </li>
            </ul>
            <button> Veja mais&nbsp;<span>→</span> </button>
          </div>

          <div className="principal_conferir">
            <div>
              <h4> Equipe</h4>
              <p>
                Conheça os membros da <br /> nossa equipe
              </p>
            </div>

            <ul>
              <li>
                <p>Coordenadores</p>
              </li>
              <li>
                <p>Pesquisadores</p>
              </li>
              <li>
                <p>Estudantes</p>
              </li>
            </ul>
            <button> Veja mais&nbsp;<span>→</span> </button>
          </div>
        </section>

        <section className="slide-principal">
          <section className="slider">
            <h1>CONHEÇA NOSSOS PROJETOS</h1>
            <div className="slider-content">
              <input type="radio" name="btn-radio" id="radio1" />
              <input type="radio" name="btn-radio" id="radio2" />
              <input type="radio" name="btn-radio" id="radio3" />
              <input type="radio" name="btn-radio" id="radio4" />

              <div className="slide-box primeiro">
                <div>
                  <h4>Nome do projeto </h4>
                  <p>
                    Tem o objetivo de desenvolver softwares para melhorar a
                    performance das pesquisas e análises
                  </p>

                  <button> Saiba mais</button>
                </div>
              </div>

              <div className="slide-box">
                <div>
                  <h4>Nome do projeto </h4>
                  <p>
                    Tem o objetivo de desenvolver softwares para melhorar a
                    performance das pesquisas e análises
                  </p>

                  <button> Saiba mais</button>
                </div>
              </div>

              <div className="slide-box">
                <div>
                  <h4>Nome do projeto </h4>
                  <p>
                    Tem o objetivo de desenvolver softwares para melhorar a
                    performance das pesquisas e análises
                  </p>

                  <button> Saiba mais</button>
                </div>
              </div>

              <div className="slide-box">
                <div>
                  <h4>Nome do projeto </h4>
                  <p>
                    Tem o objetivo de desenvolver softwares para melhorar a
                    performance das pesquisas e análises
                  </p>
                  

                  <button> Saiba mais</button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className="nossos-numeros-pai">
          <section className="nossos-numeros">
            <h1>Nossos números</h1>
            <br />

            <div className="numeros-principal">

              <div>
                <span>Projetos</span>
                <p>{ qtdProjetos }</p>
              </div>

              <div>
                <span>Linha de pesquisas</span>
                <p>{ qtdPesquisas }</p>
              </div>

              <div>
                <span>Pesquisadores</span>
                <p>{ qtdIntegrantes }</p>
              </div>

              <div>
                <span>Colaboradores</span>
                <p>10</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <section className="nav_footer">
          <div>
            <h4>Sobre</h4>
            <p>Sobre nós</p>
            <p>Metas e objetivos</p>
            <p>Manuais</p>
          </div>

          <div>
            <h4>Pesquisas</h4>
            <p>Nossas pesquisas</p>
            <p>Pesquisadores</p>
            <p>Linhas de pesquisa</p>
          </div>

          <div>
            <h4>Projetos</h4>
            <p>Nossos projetos</p>
            <p>Dúvidas frequentes</p>
            <p>Equipe</p>
          </div>

          <div>
            <h4>Contato</h4>
            <p>
              Avenida Senador Salgado Filho, 1559, Tirol, Natal-RN
            </p>
            <p>Nucleo-nudes@ifrn.edu.br</p>
            <p>(84) 99090-9090</p>
          </div>
        </section>

        <section className="logo_footer">
          <img width="150px" src={ladesfooter} alt="logo lades" />
          <img src={logoif} alt="logo_if" />
        </section>
      </footer>
    </>
  );
}

export default Home;
