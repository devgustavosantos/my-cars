import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

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

export function Edit({ photo = false }) {
  const [infosCar, setInfosCars] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  function handleInfosCar(e) {
    const inputName = e.target.name;
    const value = e.target.value;

    switch (inputName) {
      case "form-title":
        setInfosCars({
          _id: infosCar._id,
          title: value,
          brand: infosCar.brand,
          price: infosCar.price,
          age: infosCar.age,
        });
        break;

      case "form-brand":
        setInfosCars({
          _id: infosCar._id,
          title: infosCar.title,
          brand: value,
          price: infosCar.price,
          age: infosCar.age,
        });
        break;

      case "form-price":
        setInfosCars({
          _id: infosCar._id,
          title: infosCar.title,
          brand: infosCar.brand,
          price: value,
          age: infosCar.age,
        });
        break;

      case "form-age":
        setInfosCars({
          _id: infosCar._id,
          title: infosCar.title,
          brand: infosCar.brand,
          price: infosCar.price,
          age: value,
        });
        break;
    }
  }

  async function updateCar() {
    try {
      const response = await api.put(`/cars/${id}`, infosCar);

      if (response.data._id) {
        alert("Os dados foram atualizados com sucesso!");
        navigate("/");
      }
    } catch (error) {
      alert(
        "Não foi possível atualizar as informações. Por favor tente novamente"
      );
      console.log(error);
    }
  }

  useEffect(() => {
    async function searchInfos() {
      try {
        const response = await api.get(`/cars/${id}`);
        setInfosCars(response.data);
      } catch (error) {
        alert(
          "Não foi possível carregar as informações. Por favor tente novamente"
        );
        console.log(error);
      }
    }
    searchInfos();

    alert("Digite apenas os campos que deseja alterar.");
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Editar carro">
          <ButtonText title="Voltar" to="/" />
        </Section>
        {infosCar && (
          <Form>
            <Input
              type="text"
              name="form-title"
              placeholder={infosCar.title}
              onChange={e => handleInfosCar(e)}
            />
            <PhotoInput photo={photo} />
            <div className="infos">
              <Input
                type="text"
                name="form-brand"
                placeholder={infosCar.brand}
                onChange={e => handleInfosCar(e)}
              />
              <Input
                type="number"
                name="form-age"
                placeholder={infosCar.age}
                onChange={e => handleInfosCar(e)}
              />
              <Input
                type="number"
                name="form-price"
                placeholder={infosCar.price}
                onChange={e => handleInfosCar(e)}
              />
            </div>
          </Form>
        )}
      </Wrapper>
      <ButtonsArea>
        <Button title="Salvar" onClick={updateCar} />
      </ButtonsArea>
    </Container>
  );
}
