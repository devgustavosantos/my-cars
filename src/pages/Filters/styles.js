import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 200px;

  > div:last-child {
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .pack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    > * {
      flex-grow: 1;
      width: min(100%, 300px);
    }

    > *:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const Form = styled.form`
  h2 {
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
  }
`;
