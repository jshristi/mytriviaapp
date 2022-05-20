import TriviaQue from './components/TriviaQue';
import {useState} from "react";
import Axios from "axios";
import classes from './UI/App.module.css';
import useAlan from '../../my-trivia/src/components/useAlan';

function App() {
  const [que, setQue] = useState('');        
  
  const getQue = num  => {
    let q ='';
    Axios.get('https://opentdb.com/api.php?amount=1&category='+ num +'&type=multiple').then((response) => {
         console.log("response:",response.data.results[0].question);
          q = response.data.results[0].question;
         setQue(response.data.results[0]);    
         console.log("ingetque:"+q)
    })
       
  }
  
  useAlan({getQue});
  return (
    <div className={classes.card}>
      <center>
        <h2>Welcome To Trivia Quiz </h2>
        <h3>Select any category!</h3>
      </center>
      <div className={classes.catBtn}>
          <button onClick={() => getQue('10')}>Book</button>
          <button onClick={() => getQue('12')}>Music</button>
          <button onClick={() => getQue('11')}>Film</ button>                
      </div>
      {que && <TriviaQue que={que} /> }
    </div>
  );
}

export default App;
