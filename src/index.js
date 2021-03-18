import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({language, message, num}){

  return (

    <div className="wrapper">
      <h1>This is my basic first {language} App.</h1>

      <p>{message}</p>
      
      <p>
        There are {num} props used here.
        <br/>
        I learnt it using:
      </p>

      <p className="react-butt">
        <a href="https://reactjs.org/" target="_blank">REACT</a>
      </p>
    
    </div>
  );
}

ReactDOM.render(
  <Hello
    language="React"
    message="You can check my codes" 
    num ={3}
  />,
  document.getElementById("root")
);


