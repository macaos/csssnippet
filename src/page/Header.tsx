import React from "react";
import { css } from "emotion";
import classnames from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./item/scss/Item.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="content">
        <i
          className={classnames([
            "xi-strongbox xi-2x",
            css`
              color: #f4580b;
            `
          ])}
        ></i>
        <div className="logo1">CSS</div>
        <div className="logo2"> Pattern Snippet</div>
      </div>
    </div>
  );
};

export default Header;
