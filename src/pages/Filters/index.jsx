import { useState, useEffect } from "react";

import { api } from "../../services/api";

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

export function Filters() {
  const [brand, setBrand] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [cars, setCars] = useState("");

  useEffect(() => {
    async function searchData() {
      const response = await api.get("/cars");
      setCars(response.data);
    }

    searchData();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Filtros">
          <ButtonText title="Voltar" to="/" />
        </Section>
        <Form>
          <h2>Nome</h2>
          <Input placeholder="Digite o nome do carro aqui!" />
          <div className="pack">
            <div className="brand">
              <h2>Marca</h2>
              {cars && <BrandCheckbox cars={cars} />}
            </div>
            <div className="age-price">
              <h2>Ano</h2>
              {cars && <AgesSelect cars={cars} />}
              <h2>Preço</h2>
              <Price>
                <span>
                  Mínimo <input type="number" />
                </span>
                <span>
                  Máximo <input type="number" />
                </span>
              </Price>
            </div>
          </div>
          <h2>Dono</h2>
          <label htmlFor="owner">
            <input type="checkbox" name="form-owner" id="owner" />
            Desejo mostrar apenas carros que eu adicionei.
          </label>
        </Form>
      </Wrapper>
      <ButtonsArea>
        <Button title="Remover Filtros" isDangers />
        <Button title="Aplicar Filtros" />
      </ButtonsArea>
    </Container>
  );
}
