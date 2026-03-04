const Card = ({ children, opacity }) => {
  return (
    <div style={{opacity:opacity, border: "2px solid #3B4CCA", borderRadius: 8, padding: 16, margin: 4, backgroundColor: "#fdf6ec", boxShadow: "0 2px 8px rgba(59,76,202,0.15)" }}>
      {children}
    </div>
  );
};

export default Card;
