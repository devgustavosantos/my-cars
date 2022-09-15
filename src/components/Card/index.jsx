import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Card({ name, brand, price, age, photo, ...rest }) {
  return (
    <Container>
      <img src={photo} alt="Foto do carro" />
      <h3>{name}</h3>
      <span>
        <strong>Marca: </strong>
        {brand}
      </span>
      <span>
        <strong>Ano: </strong>
        {age}
      </span>
      <span>
        <strong>R$: </strong>
        {price}
      </span>
      <Button title="Mostrar detalhes" {...rest} />
    </Container>
  );
}
