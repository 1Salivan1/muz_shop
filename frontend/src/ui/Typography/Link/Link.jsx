import style from "./link.module.css";

function Link({ children, href, mr, ml, mt, mb, fontSize, color }) {
  return (
    <a
      className={style["link"]}
      href={href}
      style={{
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        fontSize: fontSize ? fontSize : "25px",
        color: color ? color : "black",
      }}
    >
      {children}
    </a>
  );
}

export default Link;
