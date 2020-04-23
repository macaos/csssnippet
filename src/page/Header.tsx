import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="content">
        <div className="logo1">CSS</div>
        <div className="logo2"> Pattern Snippet</div>
      </div>
    </div>
  );
};

export default Header;
