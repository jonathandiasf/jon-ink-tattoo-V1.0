export default function StepDados({ data, update }) {
  return (
    <div>
      <h2>Dados do Cliente</h2>

      <input
        placeholder="Nome"
        value={data.nome}
        onChange={e => update("nome", e.target.value)}
      />

      <input
        placeholder="Idade"
        type="number"
        value={data.idade}
        onChange={e => update("idade", e.target.value)}
      />

      <input
        placeholder="Whatsapp"
        value={data.whatsapp}
        onChange={e => update("whatsapp", e.target.value)}
      />
    </div>
  );
}
