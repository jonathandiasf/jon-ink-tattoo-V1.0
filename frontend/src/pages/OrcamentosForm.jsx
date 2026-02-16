import { useState } from 'react';
import '../index.css';

export default function OrcamentosForm() {
  const [formData, setFormData] = useState({
    descricao: '',
    tamanho_cm: '',
    parte_corpo: '',
    estilo: 'Blackwork'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Pegamos a URL do seu "cofre" .env
    const urlApi = `${import.meta.env.VITE_API_BASE_URL}/trabalhos/`;

    try {
      // 2. Salvamos no banco de dados primeiro
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // 3. Se salvou no banco, agora abre o WhatsApp
        const meuWhats = "5531993390836"; // Seu número real
        const msg = `🔥 *NOVO ORÇAMENTO - JON INK* 🔥\n\n` +
                    `🖋️ *Estilo:* ${formData.estilo}\n` +
                    `📍 *Local:* ${formData.parte_corpo}\n` +
                    `📏 *Tamanho:* ${formData.tamanho_cm}cm\n` +
                    `📝 *Ideia:* ${formData.descricao}\n\n` +
                    `*Reserva via sinal de R$ 50,00.*`;

        window.open(`https://wa.me/${meuWhats}?text=${encodeURIComponent(msg)}`, '_blank');
      } else {
        alert("Erro ao salvar no sistema. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
      alert("O servidor está desligado ou o link da API no .env está errado.");
    }
  };

  return (
    <div className="orcamento-page-wrapper">
      <div className="centralizer-container">
        <div className="card-stealth-form">
          <h2>Solicitar Orçamento</h2>
          <form onSubmit={handleSubmit} className="vertical-form">
            
            <div className="field-group">
              <label>Onde será a tattoo?</label>
              <input name="parte_corpo" placeholder="Ex: Antebraço" onChange={handleChange} required />
            </div>

            <div className="field-group">
              <label>Tamanho (cm)</label>
              <input name="tamanho_cm" type="number" placeholder="Ex: 15" onChange={handleChange} required />
            </div>
            
            <div className="field-group">
              <label>Estilo</label>
              <select name="estilo" onChange={handleChange} value={formData.estilo}>
                <option value="Blackwork">Blackwork</option>
                <option value="Fine Line">Fine Line</option>
                <option value="Realismo">Realismo</option>
              </select>
            </div>

            <div className="field-group">
              <label>Sua ideia</label>
              <textarea name="descricao" placeholder="Descreva sua ideia..." onChange={handleChange} required />
            </div>
            
            <button type="submit" className="btn-send-whatsapp">
              Fechar Orçamento no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}