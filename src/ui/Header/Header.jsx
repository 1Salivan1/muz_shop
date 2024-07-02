import style from "./header.module.css";

function Header({ text, level, color, mb, mt, mr, ml }) {
  if (level === 2) {
    return (
      <h2
        className={style["h2"]}
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
          color: color,
        }}
      >
        {text}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3
        className={style["h3"]}
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
          color: color,
        }}
      >
        {text}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4
        className={style["h4"]}
        style={{
          marginRight: mr,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
          color: color,
        }}
      >
        {text}
      </h4>
    );
  }

  return (
    <h1
      className={style["h1"]}
      style={{
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        color: color,
      }}
    >
      {text}
    </h1>
  );
}

export default Header;
