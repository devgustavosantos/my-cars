import { Container } from "./styles";

export function PhotoInput({ photo = false }) {
  function addPhoto() {
    alert("No momento essa funcionalidade ainda está em desenvolvimento...");
  }
  return (
    <Container photo={photo} onClick={addPhoto}>
      <label htmlFor="photo">
        {photo ? <span>Mudar a foto</span> : <span>Selecionar uma foto</span>}
        <input type="file" id="photo" disabled />
      </label>
    </Container>
  );
}
