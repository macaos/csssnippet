import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ depth }: { depth: string[] }) => {
  return (
    <>
      <Link to="/">Home</Link> /<Link to="/item/Block">Block</Link> /
      <Link to="/item/Block01">Block01</Link>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/item">item</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </>
  );
};

export default Breadcrumb;
