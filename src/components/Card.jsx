import "./Card.css";

const Card = ({ children, opacity }) => {
  return (
    <div className="card" style={{ opacity }}>
      {children}
    </div>
  );
};

export default Card;
