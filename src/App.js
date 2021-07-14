import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './js-scripts/Header';
import { PreInputs } from './js-scripts/PreInputs';
import './App.css';




const App = () => {
  //define variables using states
  const [numIngredients, setNumIngredients] = useState(5);
  const [originalServings, setOriginalServings] = useState(8);
  const [newServings, setNewServings] = useState(4);
  
  //create handling functions for the variables
  const handleNumIngredients = (num) => {
    setNumIngredients(num);
  }

  const handleOriginalServings = (num) => {
    setOriginalServings(num)
  }

  const handleNewServings = (num) => {
    setNewServings(num);
  }

  
  return (
  <div>
    <Header title="test"/>
    <PreInputs changeNumIngredients={handleNumIngredients} changeOriginalServings={handleOriginalServings} changeNewServings={handleNewServings}/>
    <h1></h1>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
