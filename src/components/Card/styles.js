import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  max-width: 350px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

  > h3 {
    font-size: 24px;
    margin-top: 10px;
  }

  > span:nth-child(3) {
    margin-top: 25px;
  }

  > span:nth-child(5) {
    margin: 25px 0;
    font-size: 30px;
  }

  strong {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > button {
    min-width: 150px;
    align-self: stretch;
  }
`;
