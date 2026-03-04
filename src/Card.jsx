const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: 4, backgroundColor: "#fdf6ec" }}>
      {children}
    </div>
  );
};

export default Card;