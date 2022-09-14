import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 20px 0;

  > .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
