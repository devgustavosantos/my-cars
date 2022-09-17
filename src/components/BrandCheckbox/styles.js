import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 150px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;

  > label {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }
`;
