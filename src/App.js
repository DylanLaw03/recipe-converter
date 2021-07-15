import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './js-scripts/Header';
import { PreInputs } from './js-scripts/PreInputs';
import { IngredientsInput } from './js-scripts/IngredientsInput'
import './App.css';




function App() {
  //define variables using states
  const [numIngredients, setNumIngredients] = useState(6);
  const [originalServings, setOriginalServings] = useState(8);
  const [newServings, setNewServings] = useState(4);

  //create handling functions for the variables
  const handleNumIngredients = (num) => {
    setNumIngredients(num);
  };

  const handleOriginalServings = (num) => {
    setOriginalServings(num);
  };

  const handleNewServings = (num) => {
    setNewServings(num);
  };

  return (
    <div>
      <Header title="test"/>
      <h1>numIngredients: {numIngredients} <br /> originalServings: {originalServings} <br /> newServings: {newServings}</h1>
      <PreInputs
        numIngredients={numIngredients}
        changeNumIngredients={handleNumIngredients}
        originalServings={originalServings}
        changeOriginalServings={handleOriginalServings}
        newServings={newServings}
        changeNewServings={handleNewServings}
      />
      <IngredientsInput numIngredients={numIngredients} />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
