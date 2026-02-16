import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      background: 'var(--card-bg)',
      borderBottom: '1px solid #333',
      marginBottom: '30px'
    }}>
      <Link to="/orcamentos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        NOVO ORÇAMENTO
      </Link>
      <Link to="/lista" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
        VER PEDIDOS
      </Link>
    </nav>
  );
}