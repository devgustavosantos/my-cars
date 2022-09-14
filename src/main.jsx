import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

import { Details } from "./pages/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
