import { Container } from "./styles";

export function AgesSelect({ cars }) {
  const carOrdered = cars.sort((a, b) => a.age - b.age);
  const ages = carOrdered.map(car => car.age);

  const agesUniques = new Set();

  ages.forEach(age => {
    agesUniques.add(age);
  });

  const agesFiltered = [...agesUniques];

  return (
    <Container>
      <span>
        De:
        <select>
          {agesFiltered.map(age => (
            <option key={`age-id-${age}`}>{age}</option>
          ))}
        </select>
      </span>
      <span>
        Até:
        <select>
          {agesFiltered.map(age => (
            <option key={`age-id-${age}`}>{age}</option>
          ))}
        </select>
      </span>
    </Container>
  );
}
