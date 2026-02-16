export default function StepUpload({ data, update }) {

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    update("imagens", files);
  }

  return (
    <div>
      <h2>Referências</h2>

      <input type="file" multiple onChange={handleFiles} />

      {data.imagens?.map((file, i) => (
        <p key={i}>{file.name}</p>
      ))}
    </div>
  );
}
