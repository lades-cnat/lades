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

function Contato() {
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

      <main className="main">
<h1 className="contate">Contate-nos</h1>
  <main className="maincont">
    
  <div className="maincomps">

  <div className="mainimage">
      <Image 
      alt="Contato"
      src={mainimage}
      width={465}
      height={337.92}
      />
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

export default Contato;