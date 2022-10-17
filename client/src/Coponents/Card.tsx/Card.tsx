import React from "react";
import { Link } from "react-router-dom";

export type CardType = {
  _id: string;
  number: string;
  name: string;
  description: string;
  phone: string;
  address: string;
  imgUrl: string;
};

interface Props {
  data: CardType;
}

class Card extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div className="card border-0 m-4 shadow bg-dark bg-opacity-10">
        <img src={data.imgUrl} alt={data.name} className="card-img-top" />

        <div className="card-body">
          <div className="card-title">"{data.number}"</div>
          <div className="card-title">
            <h2>{data.name}</h2>
          </div>
          <div className="card-text">{data.description}</div>
          <div>Our address: {data.address}</div>
          <div>Phone number: {data.phone}</div>
        </div>
      </div>
    );
  }
}

export default Card;
