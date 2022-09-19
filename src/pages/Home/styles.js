import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;

  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 150px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 30px;
      margin: 30px 0;
    }
  }

  > *:nth-child(3) {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
`;

export const ButtonAdd = styled(Link)`
  width: 100%;
  display: flex;
`;
