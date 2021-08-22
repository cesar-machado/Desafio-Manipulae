import { GlobalStyle } from "./globalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritas" exact component={Favorite} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
