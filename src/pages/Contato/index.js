import React from 'react';
import './Contato.css';


import logoprin from"./images/logoprin.png"
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
      <a href="https://www.youtube.com/" className="nucleo">O NÚCLEO</a>
      <a href="https://www.youtube.com/" className="nucleo">NOTICIAS</a>
      <a href="https://www.youtube.com/" className="nucleo">PESQUISADORES</a>
      <a href="https://www.youtube.com/" className="nucleo">LINHAS DE PESQUISA</a>
      <a href="https://www.youtube.com/" className="nucleo">PROJETOS</a>

<ul className="ulcontato">
<form action="./Contato">
        <button type="submit" className="contato"></button>
    </form>
</ul>
</ul>
</nav>

</header>

      <main className="maincontato">
<h1 className="contate">Contate-nos</h1>
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