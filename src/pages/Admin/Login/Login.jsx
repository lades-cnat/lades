import { useState } from "react";
import './Login.css'

function Login() {

  const [tipo, setTipo] = useState("password");

  function mudarTipo() {
    if (tipo === "password") {
      setTipo("text");
    } else if (tipo === "text") {
      setTipo("password");
    }
  }

  return (

    <>
      <h1>LADES - ADM</h1>
      <h2>Acesso</h2>
      <section>
        <input autoFocus type={tipo} id="senha" placeholder="Senha" /> <button onClick={mudarTipo} className="verSenha">Ver</button> <br />
      </section>
      <button className="entrar">Entrar</button>
    </>
  )
}

export default Login