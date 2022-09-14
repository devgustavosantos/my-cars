import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  > span {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 5px;

    > select {
      flex-grow: 1;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      border-radius: 10px;

      padding: 15px;
    }
  }
`;
