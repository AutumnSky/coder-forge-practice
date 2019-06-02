import React from "react";
import Header from "./Components/Header";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  button:focus {
    outline: none;
  }

`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
}

export default App;
