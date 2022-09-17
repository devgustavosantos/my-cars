import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  text-align: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 70px;
    line-height: 60px;
  }

  > p {
    font-size: 20px;
    margin: 20px 0;
  }
`;
