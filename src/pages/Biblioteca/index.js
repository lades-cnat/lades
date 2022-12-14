import React from 'react';
import './Biblioteca.css';


import logoprin from "./images/logoprin.png"
import mainimage from "./images/mainimage.png"

function Page() {
  return (
    <div className="container">
      <head>
        <title>NUDES</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="header">

        <div className="logopri">
          <img src={logoprin} className="logopri" alt="Logo Lades" />
        </div>

        <div className="logoprimob">
          <img src={logoprin} className="logoprimob" alt="Logo Nudes" />
        </div>

        <nav className="nav">
          <ul className="ulheader">
            <a href="/lades/#/sobre" className="nucleo">O NÚCLEO</a>
            <a href="https://www.youtube.com/" className="nucleo">NOTICIAS</a>
            <a href="/lades/#/pesquisadores" className="nucleo">PESQUISADORES</a>
            <a href="/lades/#/pesquisa" className="nucleo">LINHAS DE PESQUISA</a>
            <a href="https://www.youtube.com/" className="nucleo">PROJETOS</a>
            <a href="/lades/#/biblioteca" className="nucleo">BIBLIOTECA</a>

            <ul className="ulcontato">
              <form action="/lades/#/contato">
                <button type="submit" className="contato"></button>
              </form>
            </ul>
          </ul>
        </nav>

      </header>

      <main className="main">

        <main className="sectionone">

          <h1 className="biblitext">Biblioteca</h1>

        </main>

        <main className="sectiontwo">

          <h1 className="sectcoment">Sinta-se convidado para<br></br> conhecer nosso acervo que<br></br>está disponível no núcleo!</h1>

          <div className="texts2">

            <h1 className="ofon">Onde fica o núcleo?</h1>

            <h1 className="sectcoment2">17º andar da Diac, terceira porta à esquerda.<br></br>
              IFRN Campus Natal Central
            </h1>

          </div>

        </main>

        <main className="sectionthree">

          <section className="searchbarr">
            <h1 className='searchtext'>Buscar por título, gênero, autor, editora e palavra-chave</h1>
          </section>

        </main>

        <main className="sectionfour">
            <h1 className="fb">Filtrar biblioteca</h1>
        </main>

        <main className="sectionfive">
            <div className="fivedivs1"></div>
            <div className="fivedivs2"></div>
            <div className="fivedivs3"></div>
        </main>


      </main>


      <footer className="footer">

      </footer>


    </div>
  );
}

export default Page;