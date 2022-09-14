import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;

  > .infos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    > input {
      margin-bottom: 0;

      flex-grow: 1;
      width: 30%;
    }
  }
`;
