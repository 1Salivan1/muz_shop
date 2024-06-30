import style from "./button.module.css";

function Button({ text, onClick }) {
  return <button className={style["button"]}>{text}</button>;
}

export default Button;
