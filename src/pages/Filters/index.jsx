import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { BrandCheckbox } from "../../components/BrandCheckbox";

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
          <BrandCheckbox
            brands={[
              { name: "Fiat", id: 1 },
              { name: "Chevrolet", id: 2 },
              { name: "Honda", id: 3 },
              { name: "Ferrari", id: 4 },
              { name: "Renault", id: 5 },
              { name: "Citroen", id: 6 },
            ]}
          />
        </Form>
      </Wrapper>
    </Container>
  );
}
