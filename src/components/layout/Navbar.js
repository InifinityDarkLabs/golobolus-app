import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <Link className="navbar-brand brand-logo" to="/">
        Golobolus
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Who we are?
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Communicate
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Downloads
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
