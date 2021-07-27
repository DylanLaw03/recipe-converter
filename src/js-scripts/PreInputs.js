import React from 'react';

export const PreInputs = (props) => {
    
    //create functions to handle changing variables
    const handleNumIngredientsChange = (e) => {
      const numIngredients = e.target.value;
      props.changeNumIngredients(numIngredients);
    };

    const handleOriginalServingsChange = (e) => {
      const originalServings = e.target.value;
      props.changeOriginalServings(originalServings);
    };

    
    const handleNewServingsChange = (e) => {
      const newServings = e.target.value;
      props.changeNewServings(newServings);
    };
  
    return (
    
      <div className="pre-inputs">
        <form className='num-ingredients'>
          <label>Number of Ingredients: </label>
          <input min="1"
            defaultValue={props.numIngredients}
            onChange={handleNumIngredientsChange}
            type="number"
          />
        </form>

        <form className='original-servings'>
          <label>Original Servings: </label>
          <input min="1"
            defaultValue={props.originalServings}
            onChange={handleOriginalServingsChange}
            type="number"
          />
        </form>

        <form className='new-servings'>
          <label>New Servings: </label>
          <input min="1"
            defaultValue={props.newServings}
            onChange={handleNewServingsChange}
            type="number"
          />
        </form>
      </div>
    );
  };