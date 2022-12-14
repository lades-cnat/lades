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

      <main className="maincontato">
        <h1 className="contatec">Contate-nos</h1>
        <main className="maincontt">

          <div className="maincomps">

            <div className="mainimage">
              <img src={mainimage} className="mainimage" alt="Contato" />
            </div>

            <form className="mainbox">

            </form>

          </div>

        </main>

      </main>


      <footer className="footer">

      </footer>


    </div>
  );
}

export default Page;