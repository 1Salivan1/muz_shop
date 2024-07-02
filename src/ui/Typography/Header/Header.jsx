import style from "./header.module.css";

function Header({ children, level, color, mb, mt, mr, ml }) {
  return (
    <h1
      className={
        level === 1
          ? style["h1"]
          : level === 2
          ? style["h2"]
          : level === 3
          ? style["h3"]
          : level === 4
          ? style["h4"]
          : style["h1"]
      }
      style={{
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        color: color,
      }}
    >
      {children}
    </h1>
  );
}

export default Header;
