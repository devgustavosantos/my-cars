import { Container } from "./styles";

export function Options({ ages, ...rest }) {
  const listOfAges = ages.map(age => {
    const randomNumber = parseInt(Math.random() * 1000);

    return (
      <option {...rest} key={`${age + randomNumber}`}>
        {age}
      </option>
    );
  });

  return <>{listOfAges}</>;
}
