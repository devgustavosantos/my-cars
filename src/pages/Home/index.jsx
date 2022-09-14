import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

import placeholder from "../../assets/place-holder.jpg";

export function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Todos carros">
          <ButtonText title="Filtros" />
        </Section>
        <main>
          <Card
            name="Civic"
            brand="Honda"
            price="2000"
            age={2012}
            photo={placeholder}
          />
          <Card
            name="Civic"
            brand="Honda"
            price="2000"
            age={2012}
            photo={placeholder}
          />
          <Card
            name="Civic"
            brand="Honda"
            price="2000"
            age={2012}
            photo={placeholder}
          />
        </main>
      </Wrapper>
      <ButtonsArea>
        <Button title="Adicionar" />
      </ButtonsArea>
    </Container>
  );
}
