import React from "react";

import Title from "../Title/Title";

interface ServicesProps {}

interface ServicesState {
  selectedService: string;
  services: Array<string>;
  selectedStatus: string;
  statuses: Array<string>;
}

class Services extends React.Component<ServicesProps, ServicesState> {
  constructor(props: ServicesProps) {
    super(props);
    this.state = {
      selectedService: "email",
      services: ["email", "calls", "ads"],
      selectedStatus: "Active",
      statuses: ["active", "not active", "banned"],
    };
  }

  render() {
    return (
      <>
        <Title text="Services"></Title>
        <div className="text-center bg-dark">
          <h3 className="text-light">
            Choose service that you would like to get
          </h3>
          <br></br>
          <h3 className="text-light">from BizzAd</h3>
        </div>

        <div className="d-flex align-items-center p-3 my-4 bg-light">
          <div className="d-flex me-3">
            <label className="pe-2">Service name:</label>
            <select className="form-select">
              {this.state.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex me-3">
            <label className="pe-2">Status:</label>
            <select className="form-select">
              {this.state.statuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-success text-dark ">
              Add Service
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
