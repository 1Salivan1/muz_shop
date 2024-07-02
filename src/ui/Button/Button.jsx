import style from "./button.module.css";

function Button({ text, onClick, color }) {
  return (
    <button
      className={
        color === "green" ? style["green-button"] : style["transperent-button"]
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
