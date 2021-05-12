import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark" style={{backgroundColor: "#212529"}}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Book
          </Link>
          <div>
            <Link to="/contacts/add" className="btn btn-light ml-auto">
              Create Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
