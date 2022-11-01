import React from "react";
import Card, { CardType } from "../Card.tsx/Card";
import Title from "../Title/Title";
import "./Menu.css";
import { getRequest } from "../authService/apiService";

type displayMode = "grid" | "list";

interface MenuProps {
  defaultDisplay: displayMode;
}

interface MenuState {
  display: displayMode;
  cards: Array<CardType>;
  cardsDisplay: Array<Card>;
  fullName: string;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    this.state = {
      display: props.defaultDisplay,
      cards: [],
      cardsDisplay: [],
      fullName: "",
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
    this.setState(() => ({
      fullName: "",
    }));
  };

  componentDidMount() {
    const res = getRequest("cards/");
    if (!res) {
      return;
    }

    res
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          cards: json,
          cardsDisplay: json,
        }));
      });
  }

  changeDisplayMode = (mode: displayMode) => {
    this.setState((state, props) => ({
      display: mode,
    }));
  };

  render() {
    return (
      <>
        <h1 className="text-center">
          <Title text="BizzAd" />
        </h1>
        <h2 className="text-center">
          <Title text="Advertising your business" />
        </h2>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <div className="d-flex justify-content-between px-5">
              <form className="d-flex" role="search ">
                <input
                  value={this.state.fullName}
                  onChange={(e) => this.handleInputChange(e, "fullName")}
                  type="text"
                  placeholder="search..."
                  className="form-control"
                />
                <button className="btn btn-outline-success" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>

              <div>
                <div>
                  <button
                    onClick={(e) => this.changeDisplayMode("list")}
                    className="btn btn-outline-success"
                  >
                    <i className="bi bi-list-ul"></i>
                  </button>
                  <button
                    onClick={(e) => this.changeDisplayMode("grid")}
                    className="btn btn-outline-success"
                  >
                    <i className="bi bi-grid-3x2-gap"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className={this.state.display}>
          {this.state.cards
            .filter((card) => card.name.toLowerCase().includes(""))
            .map((card) => (
              <Card key={card._id} data={card}></Card>
            ))}
        </div>
      </>
    );
  }
}

export default Menu;
