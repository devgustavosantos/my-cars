import { Container } from "./styles";

import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container>
      <h1>Erro 404</h1>
      <p>Desculpe, a página que você buscou não está indisponível.</p>
      <Link to="/">
        <Button title="Voltar para o inicio" />
      </Link>
    </Container>
  );
}
