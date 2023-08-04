import React from "react";
import HeartButton from "./HeartButton";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
      <HeartButton />
    </div>
  );
}

export default Note;
