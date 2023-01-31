import React from 'react';
import './Biblioteca.css';


import logoprin from "./images/logoprin.png"
import local from "./images/localizacao.png"
import carta from "./images/carta.png"
import telefone from "./images/telefone 1.png"
import livro1 from "./images/livro1.jpg"
import livro2 from "./images/livro2.jpg"
import livro3 from "./images/livro3.jpg"
import livro4 from "./images/livro4.jpg"
import livro5 from "./images/livro5.jpg"
import livro6 from "./images/livro6.jpg"
import livro7 from "./images/livro7.jpg"
import livro8 from "./images/livro8.jpg"
import livro9 from "./images/livro9.jpg"
import livro10 from "./images/livro10.jpg"
import livro11 from "./images/livro11.jpg"
import livro12 from "./images/livro12.jpg"


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

      <main className="main">

        <main className="sectionone">

          <h1 className="biblitext">Biblioteca</h1>

        </main>

        <main className="sectiontwo">

          <h1 className="sectcoment">Sinta-se convidado para<br></br> conhecer nosso acervo <br></br>que está disponível no laboratório!</h1>

          <div className="texts2">

            <h1 className="ofon">Onde fica o núcleo?</h1>

            <h1 className="sectcoment2">17º andar da Diac, terceira porta à esquerda.<br></br>
              IFRN Campus Natal Central
            </h1>

          </div>

        </main>

        <main className="sectionthree">

          <section className="h1s">
            <h1 className='bibliotext'>Conheça os livros que estão disponíveis <br></br>em nosso laboratório!</h1>
          </section>

          <section className="books">

            <div className="rectanp">

              <div className="figure">
              <img src={livro1} className="livros" alt="A Linguagem de Programação Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">A Linguagem de <br></br>Programação Java</h1>
            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro2} className="livros" alt="Introdução aos sistemas operacionais" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Introdução aos sistemas <br></br>operacionais</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro3} className="livros" alt="Princípios de sistemas operacionais" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Princípios de sistemas operacionais</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro4} className="livros" alt="Programação Orientada a Objetos com Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Programação Orientada a <br></br>Objetos com Java</h1>
            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro5} className="livros" alt="Como Programar em JavaBeans" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Como Programar em <br></br>JavaBeans</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro6} className="livros" alt="Introdução à lógica" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Introdução à lógica</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro7} className="livros" alt="New Trends in Databases and Information Systems" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">New Trends in Databases<br></br> and Information Systems</h1>
            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro8} className="livros" alt="Garantia da Qualidade de Software" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Garantia da Qualidade<br></br> de Software</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro9} className="livros" alt="Estruturas de Dados e Algoritmos em Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Estruturas de Dados<br></br> e Algoritmos em Java</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro10} className="livros" alt="A Linguagem de Programação Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Sistemas Operacionais<br></br> Modernos</h1>
            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro11} className="livros" alt="A Linguagem de Programação Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Sistemas Operacionais<br></br>com Java</h1>

            </div>

            <div className="rectanp">

              <div className="figure">
              <img src={livro12} className="livros" alt="A Linguagem de Programação Java" />
              </div>

              <div className="figmob">
              </div>

              <h1 className="figdesc">Introdução a Sistemas<br></br> de BANCO DE DADOS</h1>

            </div>

          </section>

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