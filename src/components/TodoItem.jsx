import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleChange() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleChange}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default TodoItem;
