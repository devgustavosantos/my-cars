import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  padding: 15px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-grow: 1;

  > span:first-child {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
