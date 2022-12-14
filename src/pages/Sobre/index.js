import React from 'react';
import './Sobre.css';


import logoprin from"./images/logoprin.png"
import pcecelular from "./images/pcecelular.png"
import celulares from "./images/celulares.png"

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
<h1 className="contate">Quem somos?</h1>
<section className="flex">

<div className="imagem">
    <img src={pcecelular} className="pcecelular" alt="Informação" />
</div>

<div className="">
    <h1 className="sobreonuc">Criado em 2005, o Laboratório de Desenvolvimento de Software tem como principal objetivo oferecer aos alunos das áreas de desenvolvimento de sistemas técnicos e superiores de tecnologia uma oportunidade para a consolidação dos conhecimentos apresentados em sala de aula</h1>

</div>

<div className="">
    <h1 className="sobreonuc">Para atingir o seu objetivo o laboratório na captação de projetos de pesquisa e extensão em </h1>

</div>

<div className="imagem">
    <img src={pcecelular} className="pcecelular" alt="Informação" />
</div>

<div className="imagem">
    <img src={celulares} className="pcecelular" alt="Informação" />
</div>

<div className="">
    <h1 className="sobreonuc">Criado em 2005, o Laboratório de Desenvolvimento de Software tem como principal objetivo oferecer aos alunos das áreas de desenvolvimento de sistemas técnicos e superiores de tecnologia uma oportunidade para a consolidação dos conhecimentos apresentados em sala de aula</h1>

</div>

</section>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default Page;