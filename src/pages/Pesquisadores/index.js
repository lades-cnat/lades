import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import  "./Pesquisadores.css";

function Page() {
  return (
    <div className="container">
      <head>
        <title>LADES - Sobre</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <Header />

      <div className="Main">
            <body>
                  <h1>
                        Pesquisadores
                  </h1>
                  <h2>
                        Conheça os integrantes e colaboradores da nossa equipe de desenvolvimento do LADES
                  </h2>
            </body>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
