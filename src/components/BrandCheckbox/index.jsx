import { Container } from "./styles";

export function BrandCheckbox({ cars }) {
  return (
    <Container>
      {cars.map(car => (
        <label htmlFor={car._id} key={`brand${car._id}`}>
          <input id={car._id} type="checkbox" />
          {car.brand}
        </label>
      ))}
    </Container>
  );
}
