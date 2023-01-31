import React from 'react';
import './Pesquisadores.css';


import logoprin from"./images/logoprin.png"
import local from "./images/localizacao.png"
import carta from "./images/carta.png"
import telefone from "./images/telefone 1.png"
import dani from "./images/danielle.png"
import alessandro from "./images/alessandro.jpeg"
import lucena from "./images/lucena.jpeg"
import minora from "./images/minora.jpeg"
import demostenes from "./images/demostenes.jpeg"
import placido from "./images/placido.png"

function Page() {
  return (
    <div className="container">
      <head>
        <title>LADES - Sobre</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="header">

<div className="logopri">
      <a href="/lades">
          <img src={logoprin} className="logopri" alt="Logo Lades" />
        </a>
</div>

<div className="logoprimob">
        <img src={logoprin} className="logoprimob" alt="Logo Nudes" />
</div>

<nav className="nav">
<ul className="ulheader">
      <a href="/lades/#/sobre" className="nucleo">LABORATÓRIO</a>
      <a href="/lades/#/pesquisadores" className="nucleo">PESQUISADORES</a>
      <a href="/lades/#/pesquisa" className="nucleo">LINHAS DE PESQUISA</a>
      <a href="/lades/#/projetos" className="nucleo">PROJETOS</a>
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
<h1 className="contate">Conheça nossos pesquisadores</h1>
<section className="flexp">

<div className="rectanp">
  
    <div className="figure">
    <img src={dani} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" />
    </div>

    <div className="figmob">
    </div>

    <h1 className="figdesc">Danielle Freitas</h1>
</div>

<div className="rectanp">

    <div className="figure">
    <img src={alessandro} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" />
    </div>

    <div className="figmob">
    </div>

    <h1 className="figdesc">Alessandro Souza</h1>

</div>

<div className="rectanp">

  <div className="figure">
  <img src={lucena} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" />
      </div>

      <div className="figmob">
      </div>

    <h1 className="figdesc">Leonardo Lucena</h1>

</div>

<div className="rectanp">

      <div className="figure">
      <img src={minora} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" />        
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Leonardo Minora</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>
      
      <div className="figmob">
      </div>

      <h1 className="figdesc">Gilbert Azevedo</h1>

</div>

<div className="rectanp">

      <div className="figure">
      <img src={demostenes} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" /> 
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Demóstenes</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Alexandre Gomes</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Cláudia Maria</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Fellipe Araújo</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">George Azevedo</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Helder Pacheco</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">José Antônio</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Marilia Aranha Freire</h1>

</div>

<div className="rectanp">

      <div className="figure">
      <img src={placido} className="pesqphoto" alt="Estruturas de Dados e Algoritmos em Java" /> 
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Plácido Antonio </h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Robinson Luis</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Silvia Aparecida</h1>

</div>

</section>
      </main>
      <footer className="footer">

      <div className='footerfirstpart'>
          <div className="textofooter">

            <h1>LABORATÓRIO DE DESENVOLVIMENTO<br></br> DE SOFTWARE DO IFRN</h1>

          </div>
        </div>

          <div className='footersecpart'>

            <section className='compsltc'>

            <div className='localrow'>
            <img src={local} className="local" alt="Localização" />
            <h1 className='localtext'>Avenida Senador Salgado Filho, 1559, Tirol, Natal-RN</h1>
            </div>

            <div className='telrow'>
            <img src={telefone} className="telefone" alt="Telefone" />
            <h1 className='localtext'>(84) 99090-9090</h1>
            </div>

            <div className='cartarow'>
            <img src={carta} className="carta" alt="Carta" />
            <h1 className='localtext'>nucleo-nudes@ifrn.edu.br</h1>
            </div>

            </section>

          </div>

      </footer>
    </div>
  );
}

export default Page;