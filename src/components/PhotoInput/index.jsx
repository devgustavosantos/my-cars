import { Container } from "./styles";

export function PhotoInput({ photo = false }) {
  return (
    <Container photo={photo}>
      <label htmlFor="photo">
        {photo ? <span>Mudar a foto</span> : <span>Selecionar uma foto</span>}
        <input type="file" id="photo" />
      </label>
    </Container>
  );
}
