import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Infos, ButtonAdd } from "./styles";

import { Wrapper } from "../../components/Wrapper";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Image } from "../../components/Image";
import { InfoCard } from "../../components/InfoCard";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";

export function Details() {
  const [infosCar, setInfosCars] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  async function deleteCar() {
    const confirmDeletion = confirm("Você tem certeza que deseja excluir?");

    if (confirmDeletion) {
      try {
        const response = await api.delete(`/cars/${id}`);
        if (response.data._id) {
          alert("O carro foi excluído com sucesso.");
          navigate("/");
        }
      } catch (error) {
        alert(
          "Não foi possível excluir, tente novamente em alguns segundos..."
        );
        console.log(error);
      }
    }
  }

  useEffect(() => {
    async function searchInfos() {
      try {
        const response = await api.get(`cars/${id}`);
        setInfosCars(response.data);
      } catch (error) {
        alert(
          "Não foi possível carregar as informações. Por favor tente novamente"
        );
        navigate("/");
        console.log(error);
      }
    }
    searchInfos();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Detalhes">
          <ButtonText title="Voltar" to="/" />
        </Section>
        <Image />
        {infosCar && (
          <>
            <h2>{infosCar.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              illum, praesentium ducimus accusamus, velit voluptates beatae
              ratione temporibus vel aut ad. Quo debitis modi fugit laboriosam
              obcaecati reiciendis placeat repellat! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Amet ipsam quia praesentium et culpa
              illo molestiae ratione optio reiciendis nam tempora labore, quos
              asperiores. Dignissimos quidem quis perspiciatis numquam
              repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed enim commodi dolores iste iusto nulla voluptatem quasi
              libero excepturi cupiditate obcaecati numquam delectus quos eos
              animi voluptate, officia nostrum. Vitae!
            </p>
            <Infos>
              <InfoCard info="Marca" value={infosCar.brand} />
              <InfoCard info="Ano" value={infosCar.age} />
              <InfoCard info="Preço" value={infosCar.price} />
            </Infos>
          </>
        )}
      </Wrapper>
      <ButtonsArea>
        <ButtonAdd to={`/edit/${id}`}>
          <Button title="Editar" className="button-edit" />
        </ButtonAdd>
        <Button title="Excluir" isDangers onClick={deleteCar} />
      </ButtonsArea>
    </Container>
  );
}
