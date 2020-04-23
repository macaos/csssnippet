import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/item">item</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
