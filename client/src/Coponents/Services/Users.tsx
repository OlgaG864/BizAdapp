import React from "react";
import Main from "./Main";
import Message from "./Message";
import Table from "./Table";

export type StatusType = "active" | "expired" | "banned";

export interface IUser {
  fullName: string;
  status: StatusType;
  _id?: string;
}

interface UsersState {
  users: Array<IUser>;
  addSuccess: boolean;
}

class Users extends React.Component<{}, UsersState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      users: [],
      addSuccess: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          users: json,
        }));
      });
  }

  addUser = (user: IUser) => {
    fetch("http://localhost:3000/services", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          users: [...this.state.users, json],
          addSuccess: true,
        }));

        setTimeout(() => {
          this.setState(() => ({
            addSuccess: false,
          }));
        }, 2000);
      });
  };

  deleteUser = (id: string) => {
    fetch("http://localhost:3000/services", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((res) => res.json())
      .then((json) => {
        const updated = this.state.users.filter(
          (user) => user._id !== json._id
        );
        this.setState(() => ({
          users: updated,
        }));
      });
  };

  render() {
    return (
      <div className="bg-dark bg-opacity-10 border px-2">
        <Main addUser={this.addUser} />
        {this.state.users.length === 0 && (
          <Message type="warning" children="No services yet." />
        )}
        {this.state.addSuccess && (
          <Message type="success" children="New service has added" />
        )}

        <Table users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default Users;
