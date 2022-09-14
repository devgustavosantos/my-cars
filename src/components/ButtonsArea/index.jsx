import { Container } from "./styles";
import { Wrapper } from "../Wrapper";

export function ButtonsArea({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
