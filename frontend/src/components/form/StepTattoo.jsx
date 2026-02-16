export default function StepTattoo({ data, update }) {
  return (
    <div>
      <h2>Detalhes da Tattoo</h2>

      <select
        value={data.estilo}
        onChange={e => update("estilo", e.target.value)}
      >
        <option value="">Escolha o estilo</option>
        <option>Realismo</option>
        <option>Blackwork</option>
        <option>Mini Tattoo</option>
        <option>Fechamento</option>
      </select>

      <input
        placeholder="Tamanho (cm)"
        value={data.tamanho}
        onChange={e => update("tamanho", e.target.value)}
      />

      <input
        placeholder="Local do corpo"
        value={data.local}
        onChange={e => update("local", e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={data.descricao}
        onChange={e => update("descricao", e.target.value)}
      />
    </div>
  );
}
