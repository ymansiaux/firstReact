const Card = ({ children, opacity }) => {
  return (
    <div style={{opacity:opacity, border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: 4, backgroundColor: "#fdf6ec" }}>
      {children}
    </div>
  );
};

export default Card;