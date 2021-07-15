import React, { useCallback, useState } from 'react';

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
          <input
            defaultValue={props.numIngredients}
            onChange={handleNumIngredientsChange}
            type="number"
          />
        </form>

        <form className='original-servings'>
          <label>Original Servings: </label>
          <input
            defaultValue={props.originalServings}
            onChange={handleOriginalServingsChange}
            type="number"
          />
        </form>

        <form className='new-servings'>
          <label>New Servings: </label>
          <input
            defaultValue={props.newServings}
            onChange={handleNewServingsChange}
            type="number"
          />
        </form>
      </div>
    );
  };