import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

export default function SolicitarOrcamento() {
  // 1. Criamos o estado para armazenar o que o usuário digita
  const [form, setForm] = useState({ 
    local: '', 
    tamanho: '', 
    estilo: 'Blackwork', 
    ideia: '' 
  });

  // 2. Função que dispara o WhatsApp
  const enviarZap = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    const numero = "5531993390836"; // Seu número
    const texto = `Olá Jon Ink! Quero um orçamento:%0A` +
                  `- Onde: ${form.local}%0A` +
                  `- Tamanho: ${form.tamanho}%0A` +
                  `- Estilo: ${form.estilo}%0A` +
                  `- Ideia: ${form.ideia}`;

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  };

  return (
    <div className="orcamento-page-wrapper">
      <div className="centralizer-container">
        <div className="card-stealth-form">
          <h2>Solicitar Orçamento</h2>
          <p className="card-subtitle">Transforme sua ideia em arte.</p>
          
          {/* 3. Conectamos o onSubmit com a função enviarZap */}
          <form onSubmit={enviarZap} className="vertical-form">
            
            <div className="field-group">
              <label>Onde será a tattoo?</label>
              <input 
                type="text" 
                placeholder="Ex: Antebraço" 
                required 
                onChange={(e) => setForm({...form, local: e.target.value})}
              />
            </div>

            <div className="field-group">
              <label>Tamanho aproximado (cm)</label>
              <input 
                type="text" 
                placeholder="Ex: 15cm" 
                required 
                onChange={(e) => setForm({...form, tamanho: e.target.value})}
              />
            </div>

            <div className="field-group">
              <label>Estilo</label>
              <select 
                value={form.estilo} 
                onChange={(e) => setForm({...form, estilo: e.target.value})}
              >
                <option value="Blackwork">Blackwork</option>
                <option value="Fineline">Fineline</option>
                <option value="Realismo">Realismo</option>
                <option value="Old School">Freehand</option>
              </select>
            </div>

            <div className="field-group">
              <label>Sua ideia</label>
              <textarea 
                placeholder="Descreva brevemente..." 
                rows="3" 
                required
                onChange={(e) => setForm({...form, ideia: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="btn-send-whatsapp">
              FECHAR ORÇAMENTO NO WHATSAPP
            </button>
            
            <Link to="/" className="btn-back-home">⬅️ Voltar para a Galeria</Link>
          </form>
        </div>
      </div>
    </div>
  );
}