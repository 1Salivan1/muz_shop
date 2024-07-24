import React from "react";
import style from "./instrument-card.module.css";
import Text from "../../ui/Typography/Text/Text";

function InstrumentCard(props) {
  return (
    <div className={style["instrumentCard"]}>
      <img className={style["offerCard__image"]} src={props.img}></img>
      <Text isBold={true}>{props.title}</Text>
    </div>
  );
}

export default InstrumentCard;
