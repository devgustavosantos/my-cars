import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: min(400px, 50vw);

  margin-bottom: 20px;

  background: ${({ theme, photo }) =>
    photo
      ? ` no-repeat url(${photo}) center center`
      : theme.COLORS.BACKGROUND_900};
  background-size: cover;
  color: ${({ theme, photo }) =>
    photo ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};

  border: ${({ theme }) => `2px dashed ${theme.COLORS.GRAY_300}`};
  border-radius: 10px;

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    cursor: pointer;

    > span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: 5px 15px;
      border-radius: 9999px;
    }

    > input {
      display: none;
    }
  }
`;
