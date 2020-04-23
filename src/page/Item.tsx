import React, { Component } from "react";
import Card01 from "./items/card/Card01";
import Header from "./Header";
import Footer from "./Footer";
import "./items/scss/Item.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LayoutEqualWidth from "./items/layout/LayoutEqualWidth";
import Breadcrumb from "./Breadcrumb";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <Header />
        <div className="content-area">
          <Breadcrumb />
          <BrowserRouter>
            <Route path="/item/Card01">
              <Card01 />
            </Route>
            <Route path="/item/LayoutEqualWidth">
              <LayoutEqualWidth />
            </Route>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Item;
