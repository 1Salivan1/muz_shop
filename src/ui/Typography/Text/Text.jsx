import style from "./text.module.css";

function Text({ children, isBold, fontSize, mr, ml, mt, mb }) {
  return (
    <span
      className={style["text"]}
      style={{
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        fontWeight: isBold ? 600 : 400,
        fontSize: fontSize ? fontSize : "30px",
      }}
    >
      {children}
    </span>
  );
}

export default Text;
