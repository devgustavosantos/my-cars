import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 200px;

  > div:last-child {
    position: fixed;
    left: 0;
    bottom: 0;
  }
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

export const Price = styled.div`
  width: 100%;

  padding: 10px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 10px;

  display: flex;
  gap: 10px;

  > span {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > input {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      border-radius: 10px;
      padding: 5px 15px;
    }
    /*
      outline: 1px dashed red;
      max-width: 50%;
      flex-grow: 1;
    */
  }
`;
