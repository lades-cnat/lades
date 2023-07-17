import React from 'react';
import local from '../images/localizacao.png'; // Importe a imagem de localização
import carta from '../images/carta.png'; // Importe a imagem de carta
import telefone from '../images/telefone 1.png'; // Importe a imagem de telefone

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footerfirstpart'>
        <div className="textofooter">
          <h1>LABORATÓRIO DE DESENVOLVIMENTO<br />DE SOFTWARE DO IFRN</h1>
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
  );
};

export default Footer;
