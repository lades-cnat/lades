import React from 'react';
import './Projetos.css';
import Header from '../../components/header';
import mainimage from "./images/mainimage.png"
import local from "./images/localizacao.png"
import carta from "./images/carta.png"
import telefone from "./images/telefone 1.png"

function Page() {
  return (
    <div className="container">
      <head>
        <title>LADES</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <Header />

      <main className="maincontato">
        <h1 className="contatec">Contate-nos</h1>
        <main className="maincontt">

          <div className="maincomps">

            <div className="mainimage">
              <img src={mainimage} className="mainimage" alt="Contato" />
            </div>

            <form className="mainbox2">

            </form>

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