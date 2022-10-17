import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi-cloud-rain-heavy-fill "></i>
            BizzAd
          </Link>

          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item me-3">
              {/* use NavLink instead of Link, to mark this route as active using css */}
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </li>
            <li className="av-item me-3">
              <NavLink to="/signup" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
