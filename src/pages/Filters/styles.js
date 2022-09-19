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

    > .brand {
      display: inline-flex;
      flex-direction: column;
    }

    .container-brands {
      width: 100%;
      flex-grow: 1;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 10px;
      padding: 15px;
      overflow-y: auto;
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

  > label:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
  }
`;

export const Price = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .numbers {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    span {
      width: 100%;
      min-width: 160px;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    input {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      border-radius: 10px;
      padding: 5px 15px;
    }
  }

  > .container-slider {
    .slider {
      position: relative;
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 9999px;
    }

    .progress {
      position: absolute;
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 9999px;
      height: 100%;
      left: 0%;
      right: 0%;
    }

    input {
      position: absolute;

      width: 100%;

      top: -5px;
      background: none;
      pointer-events: none;
      -webkit-appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
      height: 17px;
      width: 17px;
      border-radius: 50%;
      background: ${({ theme }) => theme.COLORS.ORANGE};
      pointer-events: auto;
      -webkit-appearance: none;
      box-shadow: 0 0 6px;
    }
  }
`;

export const Ages = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;

  > span {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > select {
      flex-grow: 1;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      border-radius: 10px;

      padding: 15px;
      text-align: center;
    }
  }
`;
