import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { PhotoInput } from "../../components/PhotoInput";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";

export function Edit({ name, photo = false, brand, age, price }) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Editar carro">
          <ButtonText title="Voltar" />
        </Section>
        <Form>
          <Input type="text" placeholder={name} />
          <PhotoInput photo={photo} />
          <div className="infos">
            <Input type="text" placeholder={brand} />
            <Input type="number" placeholder={age} />
            <Input type="number" placeholder={price} />
          </div>
        </Form>
      </Wrapper>
      <ButtonsArea>
        <Button title="Salvar" />
      </ButtonsArea>
    </Container>
  );
}
