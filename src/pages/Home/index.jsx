import { useState, useEffect } from "react";

import { api } from "../../services/api";

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
        const allCars = response.data;

        //Para mostrar somente carros cadastrados por mim.
        //const myCars = allCars.filter(car => car._id.includes(baseId));

        const myCars = allCars;

        setCars(myCars);
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
        <Section title="Todos carros"></Section>
        <main>
          {cars.length > 0 ? (
            cars.map(car => (
              <Card
                name={car.title}
                brand={car.brand}
                price={car.price}
                age={car.age}
                photo={placeholder}
                key={car._id}
                onClick={e => showDetails(car._id)}
              />
            ))
          ) : (
            <h2>Nenhum carro adicionado ainda.</h2>
          )}
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
