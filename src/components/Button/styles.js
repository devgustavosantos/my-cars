import styled from "styled-components";

export const Container = styled.button`
  min-width: 250px;
  flex-grow: 1;

  background-color: ${({ theme, isDangers }) =>
    isDangers ? theme.COLORS.RED : theme.COLORS.ORANGE};
  border: none;
  border-radius: 10px;

  padding: 15px;

  color: ${({ theme, isDangers }) =>
    isDangers ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_800};
  font-weight: 700;
`;
