import React from 'react';
import './Contato.css';


import logoprin from "./images/logoprin.png"
import mainimage from "./images/mainimage.png"
import local from "./images/localizacao.png"
import carta from "./images/carta.png"
import telefone from "./images/telefone 1.png"

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
        <h1 className="contatec">Contate-nos</h1>
        <main className="maincontt">

          <div className="maincomps">

            <div className="mainimage">
              <img src={mainimage} className="mainimage" alt="Contato" />
            </div>

            <div className="mainboxx">
              <h1 className="sendemail">Você pode entrar em contato conosco agora <br></br>mesmo apenas enviando uma mensagem<br></br> para o email:</h1>
              <h1 className='sendmail2'>nucleo-nudes@ifrn.edu.br</h1>
            </div>

          </div>

        </main>

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