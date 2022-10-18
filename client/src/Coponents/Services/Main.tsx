import React from "react";

interface MainProps {
  addUser: Function;
}

interface MainState {
  fullName: string;
  email: string;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    this.setState({
      ...this.state,
      [fieldName]: event.target.value,
    });
  };

  addUser = () => {
    this.props.addUser({
      fullName: this.state.fullName,
      email: this.state.email,
      status: "active",
    });

    this.setState(() => ({
      fullName: "",
      email: "",
    }));
  };

  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <div className="d-flex justify-content">
          <input
            value={this.state.fullName}
            onChange={(e) => this.handleInputChange(e, "fullName")}
            type="text"
            placeholder="Service Name"
            className="form-control"
          />

          <input
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e, "email")}
            type="text"
            placeholder="Status"
            className="form-control mx-3"
          />
          <button onClick={this.addUser} className="btn btn-outline-success">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
