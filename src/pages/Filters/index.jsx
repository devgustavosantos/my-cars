import { Container, Form, Price } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { BrandCheckbox } from "../../components/BrandCheckbox";
import { AgesSelect } from "../../components/AgesSelect";
import { Button } from "../../components/Button";
import { ButtonsArea } from "../../components/ButtonsArea";

const brandsReceived = [
  { name: "Fiat", id: 1 },
  { name: "Chevrolet", id: 2 },
  { name: "Honda", id: 3 },
  { name: "Ferrari", id: 4 },
  { name: "Renault", id: 5 },
  { name: "Citroen", id: 6 },
];

const agesReceived = [
  { age: "1996", id: 1 },
  { age: "1997", id: 2 },
  { age: "1998", id: 3 },
  { age: "1999", id: 4 },
  { age: "2000", id: 5 },
];

export function Filters() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Filtros">
          <ButtonText title="Voltar" />
        </Section>
        <Form>
          <h2>Nome</h2>
          <Input placeholder="Digite o nome do carro aqui!" />
          <h2>Marca</h2>
          <BrandCheckbox brands={brandsReceived} />
          <h2>Ano</h2>
          <AgesSelect ages={agesReceived} />
          <h2>Preço</h2>
          <Price>
            <span>
              Mínimo <input type="number" />
            </span>
            <span>
              Máximo <input type="number" />
            </span>
          </Price>
        </Form>
      </Wrapper>
      <ButtonsArea>
        <Button title="Remover Filtros" isDangers />
        <Button title="Aplicar Filtros" />
      </ButtonsArea>
    </Container>
  );
}
