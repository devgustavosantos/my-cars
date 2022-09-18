import { useState } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

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
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");

  const { userInfos } = useAuth();

  async function register() {
    const numberRandom = parseInt(Math.random() * 9999999999);

    const noteId = `${userInfos.id}aaaa${numberRandom}`;

    if (!name || !brand || !age || !price) {
      return alert("Todos os campos são necessário!");
    }

    const userEnteredInvalidNumbers =
      isNaN(parseInt(age)) || isNaN(parseInt(price));

    if (userEnteredInvalidNumbers) {
      return alert(
        "Números inválidos foram digitados. Verifique e tente novamente!"
      );
    }

    try {
      const response = await api.post("/cars", {
        _id: noteId,
        title: name,
        brand,
        price,
        age,
      });

      alert("Carro cadastrado com sucesso!");

      setName("");
      setBrand("");
      setAge("");
      setPrice("");
    } catch (error) {
      alert("Não foi possível cadastrar, tente novamente em alguns segundos!");
      console.log(error);
    }
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
            value={name}
          />
          <PhotoInput />
          <div className="infos">
            <Input
              type="text"
              placeholder="Marca"
              onChange={e => setBrand(e.target.value)}
              value={brand}
            />
            <Input
              type="number"
              placeholder="Ano"
              onChange={e => setAge(e.target.value)}
              value={age}
            />
            <Input
              type="number"
              placeholder="Preço"
              onChange={e => setPrice(e.target.value)}
              value={price}
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
