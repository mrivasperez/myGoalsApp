import { useState } from "react";

import "./App.css";
import CourseGoals from "./Components/GoalList/CourseGoals";
import NewGoal from "./Components/NewGoal/NewGoal";

const App = () => {
  // create the goals variable in state using starting state and create new function that will update that var
  const [goals, setGoals] = useState([]);

  const addNewGoalHandler = (newGoal) => {
    // add new goal via concatanating it to the goals array !!! NOT RECOMMENDED DUE TO POTENTIAL DELAY
    // setGoals(goals.concat(newGoal));
    console.log(goals);
    // safer to use so that you don't worry with delay
    setGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div>
      <h2>Goals:</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <CourseGoals goals={goals} />
    </div>
  );
};

export default App;
