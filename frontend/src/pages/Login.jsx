import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // AQUI adicionamos o token ao localStorage
        localStorage.setItem('token_admin', data.access);
        // E aqui redirecionamos para o painel que você protegeu
        navigate('/admin');
      } else {
        alert("Acesso negado: Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro na conexão com o Django:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Painel Administrativo - Jon Ink</h2>
        <input 
          type="text" 
          placeholder="Usuário" 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}