import React, { Component, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

class Item extends Component {
  render() {
    const ItemPage = React.lazy(() => import(`.${window.location.pathname}`));
    return (
      <div className="Item">
        <Header />
        <Breadcrumb />
        <div className="content-area">
          <Suspense fallback={<div>Loading...</div>}>
            <ItemPage />
          </Suspense>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Item;
