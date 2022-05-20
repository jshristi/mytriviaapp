import classes from "../UI/TriviaQue.module.css";

function TriviaQue({que}) {
    return (
        <div className={classes.card}>                 
            <div className={classes.newsMaterial}>    
                <div className={classes.container}>                   
                    <div className={classes.category}>
                        {que.category}
                    </div>
                    <div className={classes.level}>
                        Level: {que.difficulty}  
                    </div>
                </div> 
                <h4>{que.question}</h4>
                <h5>Answer: {que.correct_answer}</h5>                 
            </div>
        </div>
    )
};

export default TriviaQue;