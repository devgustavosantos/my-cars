import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 60px auto 170px;
  grid-template-areas:
    "header"
    "content"
    "buttons";

  > .wrapper {
    grid-area: content;
    /* background-color: green; */
  }

  > .buttons {
    grid-area: buttons;
    background-color: red;
  }
`;
