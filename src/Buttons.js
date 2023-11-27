const Buttons = (props) => {
  return (
    <div className="buttons" id="activeBtn" onClick={props.onClick}>
      <button className={`btn ${props.active && "active-btn"}`}>
        {" "}
        {props.title}{" "}
      </button>
    </div>
  );
};

export default Buttons;
