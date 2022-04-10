import React from "react";
import Avatar from "./Avatar";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.address}</p>
      <p>{props.discrip}</p>
      <p>{props.mb_no}</p>
      <Avatar img={props.img} />
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
