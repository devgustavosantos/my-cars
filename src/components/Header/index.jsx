import { Container } from "./styles";

import { Wrapper } from "../Wrapper";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">myCars</Link>
      </Wrapper>
    </Container>
  );
}
