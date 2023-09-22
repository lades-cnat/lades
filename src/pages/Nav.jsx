import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import ladesLogo from '../assets/lades-logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src={ladesLogo} alt="Lades Logo" className="logo-img" />
        </div>
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/adm/integrantes">Integrantes</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adm/linhasPesquisa">Linhas de Pesquisa</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adm/projetos">Projetos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
