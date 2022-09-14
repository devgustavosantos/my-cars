import { Container, Infos } from "./styles";

import { Wrapper } from "../../components/Wrapper";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Image } from "../../components/Image";
import { InfoCard } from "../../components/InfoCard";
import { ButtonsArea } from "../../components/ButtonsArea";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Section title="Detalhes">
          <ButtonText title="Voltar" />
        </Section>
        <Image />
        <h2>Nome do Carro</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum,
          praesentium ducimus accusamus, velit voluptates beatae ratione
          temporibus vel aut ad. Quo debitis modi fugit laboriosam obcaecati
          reiciendis placeat repellat! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Amet ipsam quia praesentium et culpa illo molestiae
          ratione optio reiciendis nam tempora labore, quos asperiores.
          Dignissimos quidem quis perspiciatis numquam repellendus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sed enim commodi dolores
          iste iusto nulla voluptatem quasi libero excepturi cupiditate
          obcaecati numquam delectus quos eos animi voluptate, officia nostrum.
          Vitae!
        </p>
        <Infos>
          <InfoCard info="Marca" value="Fiat" />
          <InfoCard info="Ano" value="1996" />
          <InfoCard info="Preço" value="R$ 20000" />
        </Infos>
      </Wrapper>
      <ButtonsArea>
        <Button title="Editar" />
        <Button title="Excluir" isDangers />
      </ButtonsArea>
    </Container>
  );
}
