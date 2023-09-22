import './Home.css'

function Home() {
  return (
    <div className="home">
      <header>
        <img src="src/assets/logo.png" alt="Lades Logo" className="logo-lades-user"/>

        <nav>
          <ul>
            <li>Sobre</li>
            <li>Pesquisadores</li>
            <li>Pesquisas</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>


      <main>
        <section className="imagem">
          <div>
            <h1>LABORATÓRIO DE DESENVOLVIMENTO DE SOFTWARE</h1>
            <p>Estamos comprometidos em promover a inovação e o avanço tecnológico por meio da pesquisa e do desenvolvimento de software.</p>
          </div>
        </section>

        <section class="objetivo">
          <div class="img-objetivo"></div>

          <div className="conteudo-objetivo">
            <h1>NOSSO OBJETIVO</h1>
            <p>O Lades tem como foco central o desenvolvimento de ações que integram ensino, pesquisa e extensão, com ênfase na criação de produtos de software inovadores, pesquisa aplicada e parcerias estratégicas. Nosso objetivo é impulsionar o avanço tecnológico, formar profissionais qualificados e contribuir para o desenvolvimento da sociedade por meio do software.</p>
          </div>
        </section>

        <section className="venhaConferir">
          <h1>VENHA CONFERIR</h1>

          <div className="cards">
            <div className="card">
              <h2>Equipe</h2>
              <p>Conheça os membros da nossa equipe</p>

              <ul>
                <li>Coordenadores</li>
                <li>Pesquisadores</li>
                <li>Estudantes</li>
              </ul>

              <a href="">veja mais {'>'}</a>
            </div>
            <div className="card">
              <h2>Pesquisas</h2>
              <p>Conheça nossas linhas de pesquisa</p>

              <ul>
                <li>Engenharias</li>
                <li>Desenvolvimentos</li>
                <li>Produtividade</li>
              </ul>

              <a href="">veja mais {'>'}</a>
            </div>
            <div className="card">
              <h2>Projetos</h2>
              <p>Conheça nossos projetos</p>

              <ul>
                <li>Lades</li>
                <li>PNP</li>
                <li>Periódicos</li>
              </ul>

              <a href="">veja mais {'>'}</a>
            </div>
          </div>
        </section>

        <section>
          <h1>CONHEÇA NOSSOS PROJETOS</h1>

          <div>
            <h3>Nome do projeto</h3>
            <p>Tem o objetivo de desenvolver softwares para melhorar a perfomance das pesquisas e análises.</p>

            <button>Saiba mais</button>
          </div>

          <div>
            <h3>Nome do projeto</h3>
            <p>Tem o objetivo de desenvolver softwares para melhorar a perfomance das pesquisas e análises.</p>

            <button>Saiba mais</button>
          </div>

          <div>
            <h3>Nome do projeto</h3>
            <p>Tem o objetivo de desenvolver softwares para melhorar a perfomance das pesquisas e análises.</p>

            <button>Saiba mais</button>
          </div>
          
          <div>
            <h3>Nome do projeto</h3>
            <p>Tem o objetivo de desenvolver softwares para melhorar a perfomance das pesquisas e análises.</p>

            <button>Saiba mais</button>
          </div>
        </section>

        <section>
          <h1>NOSSOS NÚMEROS</h1>

          <div>
            <p>Projetos</p>
            <h2>24</h2>
          </div>
          <div>
            <p>Linhas de pesquisa</p>
            <h2>6</h2>
          </div>
          <div>
            <p>Equipe</p>
            <h2>26</h2>
          </div>
          <div>
            <p>Colaboradores</p>
            <h2>10</h2>
          </div>
        </section>

        <footer>
          <ul>
            <p>Sobre</p>
            <li>Sobre nós</li>
            <li>Metas e objetivos</li>
          </ul>
          <ul>
            <p>Pesquisas</p>
            <li>Pesquisadores</li>
            <li>Linhas de pesquisa</li>
          </ul>
          <ul>
            <p>Projetos</p>
            <li>Nossos projetos</li>
            <li>Equipe</li>
          </ul>
          <ul>
            <p>Contato</p>
            <li>Avenida Senador Salgado Filho, 1559, Tirol, Natal-RN</li>
            <li>nucleo-nudes@ifrn.edu.br</li>
            <li>{'(84) 99090-9090'}</li>
          </ul>

          <div>
            <h1>LADES</h1>
            <h1>IFRN</h1>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home