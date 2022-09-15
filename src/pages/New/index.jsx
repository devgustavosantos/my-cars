import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { PhotoInput } from "../../components/PhotoInput";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";

export function New() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [age, setAge] = useState(0);
  const [price, setPrice] = useState("");

  async function register() {
    const baseId = "1111111aaaaaaa";
    const numberRandom = parseInt(Math.random() * 9999999999);
    const finalId = `${baseId}${numberRandom}`;

    if (!name || !brand || !age || !price) {
      return alert("Todos os campos são necessário!");
    }

    try {
      const response = await api.post("/cars", {
        _id: finalId,
        title: name,
        brand,
        price,
        age,
      });

      console.log(response);
    } catch (error) {
      alert("Não foi possível cadastrar, verifique e tente novamente!");
      console.log(error);
    }

    console.log(finalId);
  }
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Novo carro">
          <ButtonText title="Voltar" to="/" />
        </Section>
        <Form>
          <Input
            type="text"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <PhotoInput />
          <div className="infos">
            <Input
              type="text"
              placeholder="Marca"
              onChange={e => setBrand(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Ano"
              onChange={e => setAge(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Preço"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </Form>
      </Wrapper>
      <ButtonsArea>
        <Button title="Salvar" onClick={register} />
      </ButtonsArea>
    </Container>
  );
}
