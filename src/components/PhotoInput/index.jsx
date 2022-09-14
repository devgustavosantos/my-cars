import { Container } from "./styles";

export function PhotoInput() {
  return (
    <Container>
      <label htmlFor="photo">
        <span>Selecionar uma foto</span>
        <input type="file" id="photo" />
      </label>
    </Container>
  );
}
