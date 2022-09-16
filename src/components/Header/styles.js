import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  padding: 15px 0;

  grid-area: header;

  display: flex;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;

  > span:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 12px;
  }

  > span:nth-child(2) {
    font-size: 20px;
  }
`;
