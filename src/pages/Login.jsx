import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { useAuth } from '../AuthContext';
import '../css/Login.css';

function Login() {
  const { setAuthStatus } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [correctPassword, setCorrectPassword] = useState('');

  useEffect(() => {
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
      setAuthStatus(true);
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
