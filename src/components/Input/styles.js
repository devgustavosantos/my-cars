import styled from "styled-components";

export const Container = styled.input`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;

  padding: 20px;
  margin-bottom: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
