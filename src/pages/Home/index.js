import React from 'react';

import './Inicial.css';

import logonud from "./images/logonud.png"
import logoprin from "./images/logoprin.png"
import city from "./images/city.png"
import pc from "./images/computador.png"
import db from "./images/db.png"
import conex from "./images/conexa.png"
import pcchar from "./images/pccharacter.png"
import controle from "./images/controle.png"
import secitex from "./images/secitex.png"
import local from "./images/localizacao.png"
import carta from "./images/carta.png"
import telefone from "./images/telefone 1.png"

function Page() {
  return (
    <div className="container">
      <head>
        <title>Lades</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="header">

        <div className="logopri">
        <a href="/">
          <img src={logoprin} className="logopri" alt="Logo Lades" />
        </a>
        </div>

        <div className="logoprimob">
          <img src={logoprin} className="logoprimob" alt="Logo Nudes" />
        </div>

        <nav className="nav">
          <ul className="ulheader">
            <a href="/#/sobre" className="nucleo">LABORATÓRIO</a>
            <a href="/#/pesquisadores" className="nucleo">PESQUISADORES</a>
            <a href="/#/pesquisa" className="nucleo">LINHAS DE PESQUISA</a>
            <a href="/#/projetos" className="nucleo">PROJETOS</a>
            <a href="/#/biblioteca" className="nucleo">BIBLIOTECA</a>

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

            <h1>LABORATÓRIO DE DESENVOLVIMENTO DE SOFTWARE DO IFRN</h1>

          </div>

          <div className="textandlogo">
            <div className="textop">

              <h1>LABORATÓRIO DE DESENVOLVIMENTO DE SOFTWARE DO IFRN</h1>

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


          <section className="flexh">

            <div className="rectanhome">

              <div className="figureh">
                <img src={city} className="figure" alt="Cidades Tecnológicas" />
              </div>

              <div className="figmobh">
                <img src={city} className="figmob" alt="Cidades Tecnológicas" />
              </div>

              <h1 className="figdesch">Temas de convergência:<br></br>
                Cidades inteligentes</h1>
            </div>

            <div className="rectanhome">

              <div className="figureh">
                <img src={pc} className="figure" alt="Aparelhos" />
              </div>

              <div className="figmobh">
                <img src={pc} className="figmob" alt="Aparelhos" />
              </div>

              <h1 className="figdesch">Qualidade e <br></br>produtividade de <br></br>software</h1>

            </div>

            <div className="rectanhome">

              <div className="figureh">
                <img src={db} className="figure" alt="Banco de Dados" />
              </div>

              <div className="figmobh">
                <img src={db} className="figmob" alt="Banco de Dados" />
              </div>

              <h1 className="figdesch">Bancos de Dados, Big Data <br></br>e análise de dados</h1>

            </div>

            <div className="rectanhome">

              <div className="figureh">
                <img src={conex} className="figure" alt="Conexões" />

              </div>

              <div className="figmobh">
                <img src={conex} className="figmob" alt="Conexões" />
              </div>

              <h1 className="figdesch">Sistemas Embarcados e<br></br>Móveis</h1>

            </div>

            <div className="rectanhome">

              <div className="figureh">
                <img src={controle} className="figure" alt="Controle" />
              </div>

              <div className="figmobh">
                <img src={controle} className="figmob" alt="Controle" />
              </div>

              <h1 className="figdesch">Desenvolvimento de<br></br>Jogos Digitais</h1>

            </div>

            <div className="rectanhome">

              <div className="figureh">
                <img src={pcchar} className="figure" alt="Usuário" />
              </div>

              <div className="figmobh">
                <img src={pcchar} className="figmob" alt="Usuário" />
              </div>

              <h1 className="figdesch">Engenharia de Serviços</h1>

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

              <form action="/lades/#/contato">
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
