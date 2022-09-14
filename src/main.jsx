import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

import { Edit } from "./pages/Edit";

import test from "./assets/place-holder.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Edit name="Civic" brand="Honda" age="2012" price={20000} photo={test} />
    </ThemeProvider>
  </React.StrictMode>
);
