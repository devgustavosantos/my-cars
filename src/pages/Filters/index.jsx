import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { formattedNumbers } from "../../utils/formattedNumbers";

import { useNavigate } from "react-router-dom";

import { Container, Form, Price, Ages } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { BrandCheckbox } from "../../components/BrandCheckbox";
import { Options } from "../../components/Options";
import { Button } from "../../components/Button";
import { ButtonsArea } from "../../components/ButtonsArea";

const templateEntries = {
  title: "",
  brands: [],
  ages: { from: "", to: "" },
  price: { min: "", max: "" },
  owner: false,
};

export function Filters() {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState();
  const [entries, setEntries] = useState(templateEntries);

  function formatData(cars) {
    function formatBrands() {
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

    function formatAges() {
      const onlyAges = cars.map(car => car.age);
      const agesOrdered = onlyAges.sort((a, b) => a - b);

      const agesUniques = new Set();

      agesOrdered.forEach(age => {
        agesUniques.add(age);
      });

      const agesFiltered = [...agesUniques];

      return agesFiltered;
    }

    function getMinMaxPrices() {
      const onlyPrices = cars.map(car => formattedNumbers(car.price));

      const onlyValidPrices = onlyPrices.filter(price =>
        isNaN(price) ? false : price
      );

      const minMaxPrices = {
        min: Math.min(...onlyValidPrices),
        max: Math.max(...onlyValidPrices),
      };

      return minMaxPrices;
    }

    const brands = formatBrands(initialValues);
    const ages = formatAges(initialValues);
    const prices = getMinMaxPrices(initialValues);

    const formattedData = { brands, ages, prices };

    return formattedData;
  }

  console.log({ entries });

  function handleEntries(e) {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setEntries({
          ...entries,
          [name]: value,
        });
        break;

      case "brand":
        const brandAlreadySelected = entries.brands.find(
          brand => brand == value
        );

        let newBrandsSelected = [];
        brandAlreadySelected
          ? (newBrandsSelected = entries.brands.filter(brand => brand != value))
          : (newBrandsSelected = [value, ...entries.brands]);

        setEntries({
          ...entries,
          ["brands"]: newBrandsSelected,
        });

        break;

      case "from":
        if (Number(value) <= entries.ages.to) {
          setEntries({
            ...entries,
            ["ages"]: {
              ...entries.ages,
              [name]: value,
            },
          });
        } else {
          alert(
            'Não é possível colocar um "ano final" menor do que o "ano inicial"!'
          );
        }

        break;

      case "to":
        if (Number(value) >= entries.ages.from) {
          setEntries({
            ...entries,
            ["ages"]: {
              ...entries.ages,
              [name]: value,
            },
          });
        } else {
          alert(
            'Não é possível colocar um "ano final" menor do que o "ano inicial"!'
          );
        }
        break;

      case "price-min":
        setEntries({
          ...entries,
          ["price"]: {
            ...entries.price,
            ["min"]: value,
          },
        });
        break;

      case "price-max":
        setEntries({
          ...entries,
          ["price"]: {
            ...entries.price,
            ["max"]: value,
          },
        });

        break;

      case "owner":
        entries.owner
          ? setEntries({
              ...entries,
              [name]: false,
            })
          : setEntries({
              ...entries,
              [name]: true,
            });
        break;
    }
  }

  function applyFilter() {
    if (entries.price.max < entries.price.min) {
      return alert("O preço máximo não pode ser menor do que o preço mínimo!");
    }

    alert("Filtros aplicados com sucesso");

    navigate(
      `/?title=${entries.title}&brands=${[...entries.brands]}&ages=from${
        entries.ages.from
      }to${entries.ages.to}&price-min=${entries.price.min}&price-max=${
        entries.price.max
      }&owner=${entries.owner}`
    );
  }

  useEffect(() => {
    async function searchData() {
      try {
        const response = await api.get("/cars");
        const infosFormatted = formatData(response.data);

        setInitialValues(infosFormatted);
        console.log({ infosFormatted });
        setEntries({
          ...entries,
          price: {
            min: infosFormatted.prices.min,
            max: infosFormatted.prices.max,
          },
          ages: {
            from: Math.min(...infosFormatted.ages),
            to: Math.max(...infosFormatted.ages),
          },
        });
      } catch (error) {
        console.log(error);
        alert(
          "Infelizmente não foi possível carregar os dados. Tente novamente mais tarde."
        );
        navigate("/");
      }
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
          <Input
            placeholder="Digite o nome do carro aqui!"
            name="title"
            onChange={e => handleEntries(e)}
            value={entries.title}
          />
          <div className="pack">
            <div className="brand">
              <h2>Marca</h2>
              <div className="container-brands">
                {initialValues && (
                  <BrandCheckbox
                    brands={initialValues.brands}
                    onChange={e => handleEntries(e)}
                  />
                )}
              </div>
            </div>
            <div className="age-price">
              <h2>Ano</h2>
              <Ages>
                <span>
                  De:
                  <select
                    name="from"
                    onChange={e => handleEntries(e)}
                    value={entries.ages.from}
                  >
                    {initialValues && <Options ages={initialValues.ages} />}
                  </select>
                </span>
                <span>
                  Até:
                  <select
                    name="to"
                    onChange={e => handleEntries(e)}
                    value={entries.ages.to}
                  >
                    {initialValues && <Options ages={initialValues.ages} />}
                  </select>
                </span>
              </Ages>
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
                      name="price-min"
                      onChange={e => handleEntries(e)}
                      value={entries.price.min}
                    />
                  </span>
                  <span>
                    Máximo:
                    <input
                      type="number"
                      min="{}"
                      max="{}"
                      step="1000"
                      name="price-max"
                      onChange={e => handleEntries(e)}
                      value={entries.price.max}
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
            <input
              type="checkbox"
              name="owner"
              id="owner"
              onChange={e => handleEntries(e)}
            />
            Desejo mostrar apenas carros que eu adicionei.
          </label>
        </Form>
      </Wrapper>
      <ButtonsArea>
        {/* <Button title="Remover Filtros" isDangers /> */}
        <Button title="Aplicar Filtros" onClick={applyFilter} />
      </ButtonsArea>
    </Container>
  );
}
