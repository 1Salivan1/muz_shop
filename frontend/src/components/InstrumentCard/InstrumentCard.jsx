import style from "./instrument-card.module.css";
import { useNavigate } from "react-router-dom";

function InstrumentCard(props) {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/instruments");
  };

  return (
    <div className={style["instrumentCard"]} onClick={handleShopClick}>
      <img
        className={style["offerCard__image"]}
        src={props.img}
        alt={props.title}
      ></img>
      <h6>{props.title}</h6>
    </div>
  );
}

export default InstrumentCard;
