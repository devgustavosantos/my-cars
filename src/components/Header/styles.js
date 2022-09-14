import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  padding: 15px 0;

  grid-area: header;

  display: flex;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  a {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
