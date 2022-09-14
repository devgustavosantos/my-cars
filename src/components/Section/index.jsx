import { Container } from "./styles";

export function Section({ title, bt: ButtonText = false }) {
  return (
    <Container>
      <h1>{title}</h1>
      {ButtonText && <ButtonText />}
    </Container>
  );
}
