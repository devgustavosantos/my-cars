import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { formattedNumbers } from "../../utils/formattedNumbers";

import { useNavigate, useSearchParams } from "react-router-dom";

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
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  const { userInfos } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    title: searchParams.get("title"),
    brands: searchParams.get("brands"),
    ages: searchParams.get("ages"),
    price: {
      min: searchParams.get("price-min"),
      max: searchParams.get("price-max"),
    },
    owner: searchParams.get("owner"),
  });

  const [haveFiltersBeenAdded, setHaveFiltersBeenAdded] = useState(
    filters.title ||
      filters.brands ||
      filters.ages ||
      filters.price.min ||
      filters.price.max ||
      filters.owner
  );

  function removeFilters() {
    setHaveFiltersBeenAdded(false);
    navigate("/");
    window.location.reload();
  }
  function filterCars(cars) {
    if (!haveFiltersBeenAdded) {
      return cars;
    } else {
      let filteredCars = cars;

      if (filters.title) {
        filteredCars = cars.filter(car =>
          car.title.toLowerCase().includes(filters.title.toLowerCase())
        );
      }

      if (filters.brands) {
        const brands = filters.brands.split(",");
        let filtersWithBrands = [];
        brands.forEach(brand => {
          filteredCars.forEach(car => {
            if (car.brand == brand) {
              filtersWithBrands = [car, ...filtersWithBrands];
            }
          });
        });
        filteredCars = filtersWithBrands;
      }

      if (filters.ages) {
        function formatAges() {
          const firstFormatting = filters.ages.split("from");
          const secondFormatting = firstFormatting[1].split("to");

          return secondFormatting;
        }

        const ages = formatAges();

        filteredCars = filteredCars.filter(car => {
          if (car.age >= ages[0] && car.age <= ages[1]) return car;
        });
      }

      if (filters.price.min || filters.price.max) {
        const minPrice = filters.price.min;
        const maxPrice = filters.price.max;

        if (minPrice && maxPrice) {
          filteredCars = filteredCars.filter(car => {
            if (car.price >= minPrice && car.price <= maxPrice) return car;
          });
        } else if (minPrice && !maxPrice) {
          filteredCars = filteredCars.filter(car => {
            if (car.price >= minPrice) return car;
          });
        } else if (!minPrice && maxPrice) {
          filteredCars = filteredCars.filter(car => {
            if (car.price <= maxPrice) return car;
          });
        }
      }

      if (filters.owner == "true") {
        const baseNoteId = `${userInfos.id}aaaa`;

        filteredCars = filteredCars.filter(car => {
          if (car._id.includes(baseNoteId)) return car;
        });
      }

      return filteredCars;
    }
  }

  function showDetails(id) {
    navigate(`/details/${id}`);
  }

  function formatCars(cars) {
    const alteredCars = cars.map(car => {
      const priceFormatted = formattedNumbers(car.price);
      const price = isNaN(priceFormatted) ? "Indisponível" : priceFormatted;

      return { ...car, ["price"]: price };
    });

    return alteredCars;
  }

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get("/cars");

        const allCars = response.data;

        const formattedCars = formatCars(allCars);

        const filteredCars = filterCars(formattedCars);

        setCars(filteredCars);
      } catch (error) {
        alert(
          "Não foi possível carregar os carros! Tente recarregar a página."
        );
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
        {haveFiltersBeenAdded && (
          <Button title="Remover filtros" isDangers onClick={removeFilters} />
        )}
        <Button title="Adicionar carro" onClick={() => navigate("/new")} />
      </ButtonsArea>
    </Container>
  );
}
