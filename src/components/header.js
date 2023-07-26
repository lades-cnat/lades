import React from 'react';
import logo from '../images/logo.png';
import './header.css';

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
          <a href="/integrantesAdmin" className="nucleo">Integrantes</a>
          <a href="/pesquisasAdmin" className="nucleo">Pesquisas</a>
          <a href="/projetosAdmin" className="nucleo">Projetos</a>
          <a href="/contato" className="nucleo">Contato</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
