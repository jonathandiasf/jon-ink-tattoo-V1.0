import { useEffect, useState } from 'react';
import '../index.css'; 

export default function ListaOrcamentos() {
  const [orcamentos, setOrcamentos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => { 
    const urlBase = import.meta.env.VITE_API_BASE_URL;
    
    if (!urlBase) {
      setErro("Configuração de API ausente (.env)");
      return;
    }

    // MUDANÇA AQUI: Trocamos /trabalhos/ por /orcamentos/
    fetch(`${import.meta.env.VITE_API_BASE_URL}/orcamentos/`) 
      .then(res => {
        if (!res.ok) throw new Error("Erro na resposta do servidor");
        return res.json();
      })
      .then(data => {
        const listaFinal = Array.isArray(data) ? data : (data.results || []);
        setOrcamentos(listaFinal);
      })
      .catch(err => {
        console.error(err);
        setErro("Não foi possível carregar os orçamentos.");
      });
  }, []);

  const excluirOrcamento = async (id) => {
    if (window.confirm("Deseja marcar este pedido como concluído?")) {
      const urlBase = import.meta.env.VITE_API_BASE_URL;
      
      // Aqui já estava certo, apontando para orçamentos
      const response = await fetch(`${urlBase}/orcamentos/${id}/`, { method: 'DELETE' });
      
      if(response.ok) {
        setOrcamentos(orcamentos.filter(item => item.id !== id));
      } else {
        alert("Erro ao remover do banco de dados.");
      }
    }
  };

  if (erro) return <div style={{color: 'white', padding: '50px'}}>{erro}</div>;

  return (
    <div className="content-container">
      <h1 className="title-stealth" style={{ color: 'var(--ink-red)' }}>PAINEL DE PEDIDOS</h1>
      
      <div className="grid-editorial">
        {orcamentos.map(item => (
          <div key={item.id} className="card-premium" style={{ padding: '20px', background: '#0a0a0a' }}>
            <div className="card-meta">
              {/* Priorizamos os campos da tabela de Orçamentos agora */}
              <h3 style={{ textTransform: 'uppercase', fontSize: '1rem' }}>
                {item.descricao || "Nova Solicitação"}
              </h3>
              
              <p style={{ marginTop: '10px' }}>
                <strong>📍 LOCAL:</strong> {item.parte_corpo || "Não informado"}
              </p>
              <p>
                <strong>📏 TAMANHO:</strong> {item.tamanho_cm || "0"}cm
              </p>
              <p>
                <strong>🎨 ESTILO:</strong> {item.estilo || "A definir"}
              </p>
            </div>
            
            <button 
              className="btn-whatsapp-submit" 
              style={{ width: '100%', marginTop: '15px', padding: '10px', fontWeight: 'bold' }}
              onClick={() => excluirOrcamento(item.id)}
            >
              CONCLUIR PEDIDO
            </button>
          </div>
        ))}
      </div>

      {orcamentos.length === 0 && (
        <p className="msg-status" style={{ textAlign: 'center', marginTop: '40px' }}>
          Tudo em dia! Nenhum orçamento pendente.
        </p>
      )}
    </div>
  );
}