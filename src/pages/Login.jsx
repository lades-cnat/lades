import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database'; // Importando a função get
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [correctPassword, setCorrectPassword] = useState(''); // Estado para armazenar a senha correta

  useEffect(() => {
    // Obtendo a senha correta do Firebase
    const database = getDatabase();
    const senhaRef = ref(database, 'senha');

    get(senhaRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCorrectPassword(snapshot.val());
        } else {
          console.error('Senha não encontrada no Firebase.');
        }
      })
      .catch((error) => {
        console.error('Erro ao obter a senha do Firebase:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      navigate('/adm/integrantes');
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Senha"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
