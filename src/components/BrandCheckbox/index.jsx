import { Container } from "./styles";

export function BrandCheckbox({ cars }) {
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

  return (
    <Container>
      {brands.map((brand, index) => (
        <label htmlFor={index} key={`brand${index}`}>
          <input id={index} type="checkbox" />
          {brand}
        </label>
      ))}
    </Container>
  );
}
