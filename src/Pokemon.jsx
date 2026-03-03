const Pokemon = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} width="200" height="200"></img>
      <p> {props.name} </p>
    </div>
  );
};

export default Pokemon;