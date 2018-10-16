import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark mb-5 pb-5 navigation">
      <Link className="navbar-brand" to="/">
        Brand
      </Link>
    </nav>
  );
}
