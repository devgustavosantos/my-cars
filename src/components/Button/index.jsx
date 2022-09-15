import { Container } from "./styles";

export function Button({ title, isDangers = false, ...rest }) {
  return (
    <Container isDangers={isDangers} {...rest}>
      {title}
    </Container>
  );
}
