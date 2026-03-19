import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Simulação de autenticação: busca um token no localStorage
  // No futuro o django vai salvar esse token após o login
  const isAuthenticated = localStorage.getItem('token_admin');

  if (!isAuthenticated) {
    // Se não estiver logado, manda de volta para a Home
    return <Navigate to="/" replace />;
  }

  // Se estiver logado, renderiza os componentes filhos (Navbar + ListaOrcamentos)
  return children;
}