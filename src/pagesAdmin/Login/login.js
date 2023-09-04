import React, { useState } from 'react';

function Login() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  if (loggedIn) {
    window.location.href = '/integrantesAdmin';
    return null;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite a senha"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
