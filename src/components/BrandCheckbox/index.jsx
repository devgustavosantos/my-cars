import { Container } from "./styles";

export function BrandCheckbox({ brands, ...rest }) {
  const listOfBrands = brands.map(brand => (
    <label htmlFor={`id${brand}`} key={brand} {...rest}>
      <input id={`id${brand}`} type="checkbox" name="brand" value={brand} />
      {brand}
    </label>
  ));

  return <Container>{listOfBrands}</Container>;
}
