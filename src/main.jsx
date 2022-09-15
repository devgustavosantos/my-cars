import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
