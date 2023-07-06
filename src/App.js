import TriviaQue from './components/TriviaQue';
import {useState} from "react";
import Axios from "axios";
import classes from './UI/App.module.css';
import useAlan from './components/useAlan';


function App() {
  const [que, setQue] = useState('');        
  
  const getQue = num  => {
    let q ='';
    Axios.get('https://opentdb.com/api.php?amount=1&category='+ num +'&type=multiple').then((response) => {
          q = response.data.results[0].question;
         setQue(response.data.results[0]);    
    })
       
  }
  
  useAlan({getQue});
  return (
    <div className={classes.container}>
      <div className={classes.card}>
          <h1>Welcome To Trivia Quiz </h1>
          <h4>Select any category!</h4>
        <div className={classes.catBtn}>
            <button onClick={() => getQue('10')}>Book</button>
            <button onClick={() => getQue('12')}>Music</button>
            <button onClick={() => getQue('11')}>Film</ button>                
        </div>
        {que && <TriviaQue que={que} /> }
      </div>
    </div>
  );
}

export default App;
