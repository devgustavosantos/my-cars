import styled from "styled-components";

import placeHolder from "../../assets/place-holder.jpg";

export const Container = styled.div`
  width: 100%;
  height: min(400px, 50vw);

  background: no-repeat url(${placeHolder}) center center;
  background-size: cover;

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
`;
