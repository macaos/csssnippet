import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <div className="cards">
        <Link to="/item/Card01">
          <div className="card">ONE</div>
        </Link>
        <div className="card">TWO</div>
        <div className="card">THREE</div>
        <div className="card">FOUR</div>
        <div className="card">FIVE</div>
        <div className="card">SIX</div>
        <div className="card">SEVEN</div>
        <div className="card">EIGHT</div>
        <div className="card">NINE</div>
        <div className="card">TEN</div>
        <div className="card">ELEVEN</div>
        <div className="card">TWELVE</div>
        <div className="card">ONE</div>
        <div className="card">TWO</div>
        <div className="card">THREE</div>
        <div className="card">FOUR</div>
        <div className="card">FIVE</div>
        <div className="card">SIX</div>
        <div className="card">SEVEN</div>
        <div className="card">EIGHT</div>
        <div className="card">NINE</div>
        <div className="card">TEN</div>
        <div className="card">ELEVEN</div>
        <div className="card">TWELVE</div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
