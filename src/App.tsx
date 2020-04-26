import React from "react";
import "./scss/normalize.css";
import "./scss/skeleton.css";
import "./scss/Main.scss";
import Main from "./page/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from "./page/Item";
import "./page/item/scss/Item.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/item" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
