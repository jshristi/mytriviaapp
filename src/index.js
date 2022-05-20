import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './UI/index.module.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className={classes.card}> <App /></div>);

