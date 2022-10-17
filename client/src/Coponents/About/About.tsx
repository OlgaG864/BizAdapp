import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

class About extends React.Component {
  render() {
    return (
      <>
        <Title text="About this app"></Title>
        <div className="text-center bg-dark">
          <h1 className="text-light">What makes the BizzAd the 1# App</h1>
          <br></br>
          <Link to="/" className="navbar-brand">
            <button className=" btn btn-primary m-5">Start today</button>
          </Link>
        </div>
      </>
    );
  }
}

export default About;
