import React from "react";
import Card, { CardType } from "../Card.tsx/Card";
import "./Menu.css";

type displayMode = "grid" | "list";

interface MenuProps {
  defaultDisplay: displayMode;
}

interface MenuState {
  display: displayMode;
  cards: Array<CardType>;
  cardsDisplay: Array<Card>;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    this.state = {
      display: props.defaultDisplay,
      cards: [],
      cardsDisplay: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/cards")
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
        <h1 className="text-center">BizAdd</h1>
        <h2 className="text-center">Advertising your business</h2>
        <div className="d-flex  px-5">
          <button
            onClick={(e) => this.changeDisplayMode("list")}
            className="btn btn-default"
          >
            <i className="bi bi-list-ul"></i>
          </button>
          <button
            onClick={(e) => this.changeDisplayMode("grid")}
            className="btn btn-default"
          >
            <i className="bi bi-grid-3x2-gap"></i>
          </button>
        </div>
        <div className={this.state.display}>
          {this.state.cards.map((card) => (
            <Card key={card._id} data={card}></Card>
          ))}
        </div>
      </>
    );
  }
}

export default Menu;
