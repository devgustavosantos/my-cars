import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .wrapper {
    > h2 {
      font-size: 32px;
      font-weight: 500;

      margin-top: 20px;
    }

    > p {
      text-align: justify;
      font-size: 14px;
      padding-bottom: 10px;
    }
  }

  > .buttons {
    grid-area: buttons;
    background-color: red;
  }
`;

export const Infos = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
