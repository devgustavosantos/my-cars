import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0 15px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 500;
  }
`;
