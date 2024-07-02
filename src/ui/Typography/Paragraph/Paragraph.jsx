function Paragraph({ children, color, mb, mt, mr, ml, size }) {
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
      {children}
    </p>
  );
}

export default Paragraph;
