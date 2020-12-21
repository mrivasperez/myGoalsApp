import "./CourseGoals.css";

const CourseGoals = (props) => (
  <div className="course-goals">
    <ul className="list">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  </div>
);

export default CourseGoals;
