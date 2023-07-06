import classes from "../UI/TriviaQue.module.css";

function TriviaQue({ que }) {
  return (
    <div className={classes.container}>
      <span className={classes.card}>
        <div className={classes.category}>{que.category}</div>
        <div className={classes.level}>Level: {que.difficulty} </div>
      </span>
      <h4>
        {que.question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}
      </h4>
      <h5>Answer: {que.correct_answer}</h5>
    </div>
  );
}

export default TriviaQue;
