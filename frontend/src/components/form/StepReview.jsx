import api from "../../services/api";

export default function StepReview({ data }) {

  async function enviar() {
    const form = new FormData();

    Object.keys(data).forEach(key => {
      if (key === "imagens") {
        data.imagens.forEach(img => form.append("imagens", img));
      } else {
        form.append(key, data[key]);
      }
    });

    await api.post("/orcamentos/", form);
    alert("Orçamento enviado!");
  }

  return (
    <div>
      <h2>Revisão</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={enviar}>Enviar</button>
    </div>
  );
}
