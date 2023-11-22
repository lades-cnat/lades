import '../css/home.css';
import '../css/projetos.css';
import '../css/slide.css';
import logo from '../assets/lades logo.svg';
import objetivo from '../assets/nossoobjetivo.png';
import logoif from '../assets/logoif.svg';
import ladesfooter from '../assets/ladesfooter.svg';

function Home() {
  return (
    <>
      <header>
        <nav>
        <a href = "/"> <img width="100px" src={logo} alt="logo lades" /></a>
          <ul>
            <li>
              <a href="./sobre"> Sobre</a>
            </li>
            <li>
              <a href="./pesquisadores"> Pesquisadores</a>
            </li>
            <li>
              <a href="./linhasDePesquisa"> Pesquisas</a>
            </li>
            <li>
              <a href="./projetos"> Projetos</a>
            </li>
            <li>
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
            <button> veja mais &gt; </button>
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
            <button> veja mais &gt; </button>
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
            <button> veja mais &gt; </button>
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
                <p>24</p>
              </div>

              <div>
                <span>Linha de pesquisas</span>
                <p>6</p>
              </div>

              <div>
                <span>Equipe</span>
                <p>26</p>
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
