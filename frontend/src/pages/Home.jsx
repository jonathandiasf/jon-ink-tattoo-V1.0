import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Certifique-se de que o CSS está importado

export default function Home() {
  const [trabalhos, setTrabalhos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Usamos a URL base do .env
    // 2. Apontamos para o endpoint de TRABALHOS (fotos)
    const urlBase = import.meta.env.VITE_API_BASE_URL;
    
    fetch(`${import.meta.env.VITE_API_BASE_URL}/trabalhos/`, {
      headers: { 'Accept': 'application/json' }
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro na API');
        return res.json();
      })
      .then(data => {
        // Garante que pegamos a lista de fotos corretamente
        setTrabalhos(Array.isArray(data) ? data : data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar vitrine:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="layout-stealth">
      {/* NAVBAR */}
      <nav className="navbar-minimal">
        <span className="nav-logo">JON INK</span>
        <div className="nav-links-discretos">
          <a href="#portfolio">Trabalhos</a>
          <Link to="/solicitar" className="nav-link-cta">Orçamento</Link>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-stealth">
        <div className="hero-background-blur"></div>
        <div className="hero-content">
          <img src="/Perfil Marcante.png" alt="Jon Ink Tattoo" className="hero-logo-main" />
          <p className="hero-subtitle">TATTOO ARTIST</p>
          <Link to="/solicitar" className="btn-discreto-outline">
            Iniciar Projeto →
          </Link>
        </div>
      </header>
      
    {/* SEÇÃO PORTFÓLIO - FOCO DINÂMICO */}
<section id="portfolio" className="content-container">
  <h2 className="title-stealth">PORTFÓLIO</h2>
  <p className="mobile-hint">Deslize para ver mais trabalhos →</p>
  
  <div className="highlight-gallery-container">
    {trabalhos.map(job => (
      <div key={job.id} className="card-premium-focus">
        <div className="img-holder-focus">
          <img src={job.imagem} alt={job.titulo} loading="lazy" />
        </div>
        <div className="card-meta-focus">
          <h3>{job.titulo || "Projeto Autoral"}</h3>
          <p>{job.descricao || "Estilo Personalizado"}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* FOOTER */}
      <footer id="contato" className="footer-minimal">
        <div className="footer-divider"></div>
        <div className="footer-container">
          <div className="footer-branding">
            <h1 className="footer-logo-text">JON INK</h1>
            <p className="footer-slogan">ARTES EXCLUSIVAS • PROJETOS AUTORAIS</p>
          </div>
          <div className="footer-nav-links">
            <div className="footer-group">
              <span>SOCIAL</span>
              <a href="https://instagram.com/_jontattoo" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>
            <div className="footer-group">
              <span>CONTATO</span>
              <a href="https://wa.me/5531993390836" target="_blank" rel="noreferrer">WHATSAPP</a>
              <Link to="/solicitar" style={{marginTop: '10px', fontSize: '0.7rem', color: '#bc0000'}}>SOLICITAR ORÇAMENTO</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 JON INK TATTOO STUDIO. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="footer-line"></div>
        </div>
      </footer>
    </div>
  );
}