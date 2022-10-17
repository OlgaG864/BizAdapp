import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <div className="d-flex">
            <a className="navbar-brand" href="#">
              <i className="bi bi-cloud-lightning-rain-fill"></i>
            </a>
            <h5>BizzAdd</h5>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
