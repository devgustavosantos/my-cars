import { Container } from "./styles";

export function Button({ title, isDangers = false }) {
  return <Container isDangers={isDangers}>{title}</Container>;
}
