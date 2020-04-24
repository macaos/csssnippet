import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <>
      <Link to="/">Home</Link> /<Link to="/item/Block">Block</Link> /
      <Link to="/item/Block01">Block01</Link>
    </>
  );
};

export default Breadcrumb;
