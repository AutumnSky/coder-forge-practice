import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import HowWeRoll from "./Components/HowWeRoll";
import Tutorial from "./Components/Tutorial";
import CodeSnippet from "./Components/CodeSnippet";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import NotFound from "./Components/Error/NotFound";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  button:focus {
    outline: none;
  }

  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
  
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/how-we-roll" exact component={HowWeRoll} />
          <Route path="/tutorial" exact component={Tutorial} />
          <Route path="/code-snippet" exact component={CodeSnippet} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
