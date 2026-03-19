import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar"; 
import ListaOrcamentos from '../pages/ListaOrcamentos';
import SolicitarOrcamento from '../pages/SolicitarOrcamento';
import ProtectedRoute from '../routes/ProtectedRoute'; // Importe o protetor

export default function AppRoutes() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solicitar" element={<SolicitarOrcamento />} />
      
      {/* Rota Protegida: Só entra quem tem o token no localStorage */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Navbar />
            <ListaOrcamentos />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}