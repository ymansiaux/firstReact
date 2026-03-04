const Pokemon = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} width="200" height="200"></img>
      <p> <b> {props.name} </b></p>
      <p> Attack : {props.attack} </p>
      <p> Hp : {props.hp} </p>
    </div>
  );
};

export default Pokemon;