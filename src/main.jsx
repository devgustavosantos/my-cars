import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Edit } from "./pages/Edit";
import { New } from "./pages/New";
import { Filters } from "./pages/Filters";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Filters />
    </ThemeProvider>
  </React.StrictMode>
);
