import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 20px 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
