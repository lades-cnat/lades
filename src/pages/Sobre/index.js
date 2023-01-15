import React from 'react';
import './Sobre.css';


import logoprin from "./images/logoprin.png"
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
          <img src={logoprin} className="logoprimob" alt="Logo LADES" />
        </div>

        <nav className="nav">
          <ul className="ulheader">
            <a href="/lades/#/sobre" className="nucleo">LABORATÓRIO</a>
            <a href="https://www.youtube.com/" className="nucleo">NOTICIAS</a>
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
        <h1 className="contate">Quem somos?</h1>
        <section className="flex">

          <div className="imagem">
            <img src={pcecelular} className="pcecelular" alt="Informação" />
          </div>

          <div className="">
            <h1 className="sobreonuc">O Laboratório de Desenvolvimento de Software (LADES) do IFRN tem como principal objetivo o desenvolvimento de ações de integração entre as práticas de ensino, pesquisa e extensão. Os projetos de pesquisa e extensão ligados ao LADES são desenvolvidos com a participação de pesquisadores (docentes e discentes) da área de computação do IFRN.</h1>

          </div>

          <div className="">
            <h1 className="sobreonuc">Em sua grande parte, tais projetos incluem o desenvolvimento de produtos de software inovadores. As pesquisas desenvolvidas pelo LADES têm o caráter de pesquisa aplicada em produtos, processos e serviços de engenharia de software. A aplicação prática das pesquisas desenvolvidas se dá por meio de empresas e instituições (públicas ou privadas) conveniadas.</h1>

          </div>

          <div className="imagem">
            <img src={pcecelular} className="pcecelular" alt="Informação" />
          </div>

          <div className="imagem">
            <img src={celulares} className="pcecelular" alt="Informação" />
          </div>

          <div className="">
            <h1 className="sobreonuc">Para tal, o LADES conta com o apoio da FUNCERN - Fundação de Apoio ao IFRN. O LADES conta principalmente com os docentes, discentes e egressos do curso de Tecnologia em Análise e Desenvolvimento de Sistemas, da Diretoria Acadêmica de Gestão e Tecnologia da Informação do Campus Natal-Central do IFRN. </h1>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Page;