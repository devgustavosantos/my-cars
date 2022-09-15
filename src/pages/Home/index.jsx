import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, ButtonAdd } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

import placeholder from "../../assets/place-holder.jpg";

import { api } from "../../services/api";

export function Home() {
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  function showDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        alert("Não foi possível carregar os carros!");
        console.log(error);
      }
    }
    loadCars();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Todos carros">
          <ButtonText title="Filtros" to="/filters" />
        </Section>
        <main>
          {cars.length > 0 &&
            cars.map(car => (
              <Card
                name={car.title}
                brand={car.brand}
                price={car.price}
                age={car.price}
                photo={placeholder}
                key={car._id}
                onClick={e => showDetails(car._id)}
              />
            ))}
        </main>
      </Wrapper>
      <ButtonsArea>
        <ButtonAdd to="/new">
          <Button title="Adicionar" />
        </ButtonAdd>
      </ButtonsArea>
    </Container>
  );
}
