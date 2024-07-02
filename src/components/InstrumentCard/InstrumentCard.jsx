import React from "react";
import "./instrument-card.css";

function InstrumentCard(props) {
  return (
    <div className="offerCard">
      <img className="offerCard__image" src={props.img}></img>
      <h1 className="offerCard__title">{props.title}</h1>
    </div>
  );
}

export default InstrumentCard;
