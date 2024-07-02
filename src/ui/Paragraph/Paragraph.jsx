function Paragraph({ text, color, mb, mt, mr, ml, size }) {
  return (
    <p
      style={{
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        color: color,
        fontSize: size ? size : "30px",
      }}
    >
      {text}
    </p>
  );
}

export default Paragraph;
