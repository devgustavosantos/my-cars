import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 15px;
`;
