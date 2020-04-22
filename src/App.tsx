import React from "react";
import "./scss/normalize.css";
import "./scss/skeleton.css";
import "./scss/Main.scss";
import Main from "./page/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from "./page/Item";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Main />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
