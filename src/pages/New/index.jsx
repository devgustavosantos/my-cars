import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { PhotoInput } from "../../components/PhotoInput";

export function New() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Novo carro">
          <ButtonText title="Voltar" />
        </Section>
        <Form>
          <Input type="text" placeholder="Nome" />
          <PhotoInput />
        </Form>
      </Wrapper>
    </Container>
  );
}
