import React from 'react';

import './App.css';

import logonud from "./images/logonud.png"
import logoprin from"./images/logoprin.png"
import city from "./images/city.png"
import pc from "./images/computador.png"
import db from "./images/db.png"
import conex from "./images/conexa.png"
import pcchar from "./images/pccharacter.png"
import controle from "./images/controle.png"
import secitex from "./images/secitex.png"

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
      <a href="https://www.youtube.com/" className="nucleo">O NÚCLEO</a>
      <a href="https://www.youtube.com/" className="nucleo">NOTICIAS</a>
      <a href="https://www.youtube.com/" className="nucleo">PESQUISADORES</a>
      <a href="https://www.youtube.com/" className="nucleo">LINHAS DE PESQUISA</a>
      <a href="https://www.youtube.com/" className="nucleo">PROJETOS</a>

<ul className="ulcontato">
<form action="/#/contato">
        <button type="submit" className="contato"></button>
    </form>
</ul>
</ul>
</nav>

</header>

      <main className="main">
      <main className="maincont">

      <div className="textomob">

      <h1>NÚCLEO DE DESENVOLVIMENTO DE <br></br>SOFTWARE DO IFRN</h1>
      
      </div>

    <div className="textandlogo">
      <div className="textop">

      <h1>NÚCLEO DE DESENVOLVIMENTO DE <br></br>SOFTWARE DO IFRN</h1>
      
      </div>

      <div className="logo">
      <img src={logonud} className="logo" alt="Símbolo Nudes" />
      </div>

      <div className="logomob">
      <img src={logonud} className="logomob" alt="Símbolo Nudes" />
      </div>

      </div>

  </main>




  <section className="midcont">

    <h1 className="ldp">Linhas de Pesquisa</h1>


    <section className="flex">

    <div className="rectan">
      
        <div className="figure">
        <img src={city} className="figure" alt="Cidades Tecnológicas" />
        </div>

        <div className="figmob">
        <img src={city} className="figmob" alt="Cidades Tecnológicas" />
        </div>

        <h1 className="figdesc">Temas de convergência:<br></br>
        Cidades inteligentes</h1>
    </div>

    <div className="rectan">

        <div className="figure">
        <img src={pc} className="figure" alt="Aparelhos" />
        </div>

        <div className="figmob">
        <img src={pc} className="figmob" alt="Aparelhos" />
        </div>

        <h1 className="figdesc">Qualidade e <br></br>produtividade de <br></br>software</h1>

    </div>

    <div className="rectan">

      <div className="figure">
            <img src={db} className="figure" alt="Banco de Dados" />
          </div>

          <div className="figmob">
            <img src={db} className="figmob" alt="Banco de Dados" />
          </div>

        <h1 className="figdesc">Bancos de Dados, Big Data <br></br>e análise de dados</h1>

    </div>

    <div className="rectan">

          <div className="figure">
            <img src={conex} className="figure" alt="Conexões" />
            
          </div>

          <div className="figmob">
            <img src={conex} className="figmob" alt="Conexões" />
          </div>

          <h1 className="figdesc">Sistemas Embarcados e<br></br>Móveis</h1>

    </div>

    <div className="rectan">

          <div className="figure">
            <img src={controle} className="figure" alt="Controle" />
          </div>
          
          <div className="figmob">
            <img src={controle} className="figmob" alt="Controle" />
          </div>

          <h1 className="figdesc">Desenvolvimento de<br></br>Jogos Digitais</h1>

    </div>

    <div className="rectan">

          <div className="figure">
            <img src={pcchar} className="figure" alt="Usuário" />
          </div>

          <div className="figmob">
            <img src={pcchar} className="figmob" alt="Usuário" />
          </div>

          <h1 className="figdesc">Engenharia de Serviços</h1>

    </div>
    </section>


  </section>
  <section className="mid2cont">

<section className="flex2">

<div className="rec2">

  <div className="seci">
    <img src={secitex} className="seci" alt="Secitex" />
  </div>

  <div className="secimob">
    <img src={secitex} className="secimob" alt="Secitex" />
  </div>
  
  <h1 className="rec2h1">PROJETOS</h1>

  <form action="https://youtube.com/">
        <button type="submit" className="leiamais"></button>
    </form>
</div>

<div className="rec2">

  <div className="seci">
    <img src={secitex} className="seci" alt="Secitex" />
  </div>

  <div className="secimob">
    <img src={secitex} className="secimob" alt="Secitex" />
  </div>

  <h1 className="rec2h1">EVENTOS</h1>

  <form action="https://youtube.com/">
        <button type="submit" className="leiamais"></button>
    </form>
</div>

<div className="rec2">
  <h1 className="rec2h1">GAMEDU</h1>
  <h1 className="rec2desc">Workshop de <br></br>desenvolvimento de <br></br>jogos</h1>
  <form action="https://youtube.com/">
        <button type="submit" className="leiamais"></button>
    </form>
</div>
</section>

</section>
  
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default Page;
