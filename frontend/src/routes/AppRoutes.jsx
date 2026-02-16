import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar"; 
import OrcamentosForm from '../pages/OrcamentosForm';
import ListaOrcamentos from '../pages/ListaOrcamentos';
import SolicitarOrcamento from '../pages/SolicitarOrcamento';

export default function AppRoutes() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solicitar" element={<SolicitarOrcamento />} />
      <Route path="/admin-lista-1302-db-26" element={<><Navbar /><ListaOrcamentos /></>} />
    </Routes>
  );
}