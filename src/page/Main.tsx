import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Footer";

const itemInfo = {
  basic: ["LayoutEqualWidth"],
  contents: ["Contents01"],
  card: ["Card01"]
};

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <div className="category-group">
        <h3>Card</h3>
        <div className="thumbs">
          <Link to="item/card/Card01">
            <div className="thumb">ONE</div>
          </Link>
          <Link to="item/basic/LayoutEqualWidth">
            <div className="thumb">Two</div>
          </Link>
          <Link to="item/contents/Contents01">
            <div className="thumb">Block01</div>
          </Link>
        </div>
        <h3>Contents</h3>
        <div className="thumbs">
          <Link to="item/card/Card01">
            <div className="thumb">ONE</div>
          </Link>
          <Link to="item/basic/LayoutEqualWidth">
            <div className="thumb">Two</div>
          </Link>
          <Link to="item/contents/Contents01">
            <div className="thumb">Block01</div>
          </Link>
          <div className="thumb">FOUR</div>
          <div className="thumb">FIVE</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
