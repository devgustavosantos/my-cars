import { Container } from "./styles";

export function Options({ ages, ...rest }) {
  const listOfAges = ages.map(age => {
    return (
      <option {...rest} key={`${age}`}>
        {age}
      </option>
    );
  });

  return <>{listOfAges}</>;
}
