import style from "./button.module.css";

function Button(props, { onClick, color }) {
  return (
    <button
      className={
        color === "green" ? style["green-button"] : style["transperent-button"]
      }
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
