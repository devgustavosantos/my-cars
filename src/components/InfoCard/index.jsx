import { Container } from "./styles";

export function InfoCard({ info, value }) {
  return (
    <Container>
      <span>{info}:</span>
      <span>{value}</span>
    </Container>
  );
}
