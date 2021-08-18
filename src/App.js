import React from "react";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
