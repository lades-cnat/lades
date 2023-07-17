import React from 'react';
import logo from '../images/logo.png';
import './header.css'; // Importe o arquivo CSS do Header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} className="logo" alt="Logo Lades" />
        </a>
      </div>

      <nav className="nav">
        <ul className="ulheader">
          <a href="/#/sobre" className="nucleo">Sobre</a>
          <a href="/#/pesquisadores" className="nucleo">Pesquisadores</a>
          <a href="/#/pesquisa" className="nucleo">Pesquisa</a>
          <a href="/#/projetos" className="nucleo">Projetos</a>
          <a href="/#/contato" className="nucleo">Contato</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
