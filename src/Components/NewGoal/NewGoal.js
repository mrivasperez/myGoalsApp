import { useState } from "react";

import "./NewGoal.css";
const NewGoal = (props) => {
  // create entered text var, state update function
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = { id: Math.random().toString(), text: enteredText };
    // reset input value to blank
    setEnteredText("");
    props.onAddGoal(newGoal);
  };

  const textChangedHandler = (event) => {
    // add current input as enteredText val - this is an example of two way binding
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangedHandler} />
      <button type="submit">AddGoal</button>
    </form>
  );
};

export default NewGoal;
