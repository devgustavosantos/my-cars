import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 150px;
  }

  > *:nth-child(3) {
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;
