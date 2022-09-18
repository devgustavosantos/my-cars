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

const templateVaLues = {
  title: "",
  brands: [],
  age: { from: 0, to: 0 },
  price: { min: 0, max: 0 },
  owner: false,
};

export function Filters() {
  // const [brand, setBrand] = useState("");
  // const [age, setAge] = useState("");
  // const [price, setPrice] = useState({ min: "", max: "" });
  // const [cars, setCars] = useState("");
  // const [inputLeft, setInputLeft] = useState(0);
  // const [inputRight, setInputRight] = useState(100);

  const [initialValues, setInitialValues] = useState({});

  // function handlePrice(e) {
  //   const { name, value } = e.target;

  //   console.log(name, value);

  //   if (name == "input-left") {
  //     setInputLeft(value);
  //   }

  //   if (name == "input-right") {
  //     setInputRight(value);
  //   }
  // }

  // useEffect(() => {
  //   function givePrices() {
  //     const onlyPrices = cars.map(car => car.price);
  //     setPrice({
  //       min: Math.min(...onlyPrices),
  //       max: Math.max(...onlyPrices),
  //     });
  //   }

  //   if (cars) givePrices();
  // }, [cars]);

  console.log("fora do effect", initialValues);

  useEffect(() => {
    function fixTheBrands(cars) {
      const onlyBrand = cars.map(car => car.brand);

      const brandsOrdered = onlyBrand.sort();

      const brandsWithoutDuplicates = new Set();

      brandsOrdered.forEach(brand => {
        const withoutSpaces = brand.trim();

        const lowered = withoutSpaces.toLowerCase();

        const capitalized = lowered.charAt(0).toUpperCase() + lowered.slice(1);

        brandsWithoutDuplicates.add(capitalized);
      });

      const brands = [...brandsWithoutDuplicates];

      return brands;
    }

    function fixTheAges(cars) {
      const onlyAges = cars.map(car => car.age);
      const agesOrdered = onlyAges.sort();

      const agesUniques = new Set();

      agesOrdered.forEach(age => {
        agesUniques.add(age);
      });

      const agesFiltered = [...agesUniques];

      return agesFiltered;
    }

    function getMinMaxPrices(cars) {
      const onlyPrices = cars.map(car => parseFloat(car.price) || 0);

      const minMaxPrices = {
        min: Math.min(...onlyPrices),
        max: Math.max(...onlyPrices),
      };

      return minMaxPrices;
    }

    const initialValuesWereReceived = initialValues[0] && true;

    if (initialValuesWereReceived) {
      const brands = fixTheBrands(initialValues);
      const ages = fixTheAges(initialValues);
      const prices = getMinMaxPrices(initialValues);

      setInitialValues({ brands, ages, prices });
    }
  }, [initialValues]);

  useEffect(() => {
    async function searchData() {
      const response = await api.get("/cars");
      setInitialValues(response.data);
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
              {/* {cars && <BrandCheckbox cars={cars} />} */}
            </div>
            <div className="age-price">
              <h2>Ano</h2>
              {/* {cars && <AgesSelect cars={cars} />} */}
              <h2>Preço</h2>
              <Price>
                <div className="numbers">
                  <span>
                    Mínimo:
                    <input
                      type="number"
                      min="{}"
                      max="{}"
                      step="1000"
                      // value="{}"
                      // onChange={e =>
                      //   setPrice({
                      //     min: e.target.value,
                      //     max: price.max,
                      //   })
                      // }
                    />
                  </span>
                  <span>
                    Máximo:
                    <input
                      type="number"
                      min="{}"
                      max="{}"
                      step="1000"
                      // value="{}"
                      // onChange={e =>
                      //   setPrice({
                      //     min: price.min,
                      //     max: e.target.value,
                      //   })
                      // }
                    />
                  </span>
                </div>
                {/* <div className="container-slider">
                  <div className="slider">
                    <div className="progress"></div>
                    {price && (
                      <>
                        <input
                          type="range"
                          name="input-left"
                          value={price.min}
                          min={price.min}
                          max={price.max}
                          onChange={e => handlePrice(e)}
                        />
                        <input
                          type="range"
                          name="input-right"
                          value={price.max}
                          min={price.min}
                          max={price.max}
                          onChange={e => handlePrice(e)}
                        />
                      </>
                    )}
                  </div>
                </div> */}
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
