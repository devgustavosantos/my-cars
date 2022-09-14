import { Container } from "./styles";

export function AgesSelect({ ages }) {
  return (
    <Container>
      <span>
        De:
        <select>
          {ages.map(age => (
            <option key={`age-id-${age.id}`}>{age.age}</option>
          ))}
        </select>
      </span>
      <span>
        Até:
        <select>
          {ages.map(age => (
            <option key={`age-id-${age.id}`}>{age.age}</option>
          ))}
        </select>
      </span>
    </Container>
  );
}
