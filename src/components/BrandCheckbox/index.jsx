import { Container } from "./styles";

export function BrandCheckbox({ brands }) {
  return (
    <Container>
      {brands.map(brand => (
        <label htmlFor={brand.id} key={`brand${brand.id}`}>
          <input id={brand.id} type="checkbox" />
          {brand.name}
        </label>
      ))}
    </Container>
  );
}
