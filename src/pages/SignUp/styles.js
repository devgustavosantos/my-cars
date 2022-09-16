import styled from "styled-components";

import bgImg from "../../assets/place-holder.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  max-width: 400px;
  margin: auto;

  padding: 40px 5vmin;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 35px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h3 {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    margin: 30px 0;
  }

  > button {
    flex-grow: initial;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: no-repeat url(${bgImg}) center center;
  background-size: cover;
  filter: brightness(0.5);
`;
