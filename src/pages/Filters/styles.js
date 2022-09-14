import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  > h2 {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 18px;
    margin: 10px 0;
    font-weight: 500;
  }
`;
