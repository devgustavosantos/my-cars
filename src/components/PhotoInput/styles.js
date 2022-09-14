import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: min(400px, 50vw);

  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme }) => `2px dashed ${theme.COLORS.GRAY_300}`};
  border-radius: 10px;

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    cursor: pointer;

    > input {
      display: none;
    }
  }
`;
