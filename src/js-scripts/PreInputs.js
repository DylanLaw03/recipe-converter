import React, { useCallback, useState } from 'react';

export const PreInputs = (props) => {
    
    //create functions to handle changing variables
    const handleNumIngredientsChange = (e) => {
      const numIngredients = e.target.value;
      props.changeNumIngredients(numIngredients);
    };
  
    return (
    
      <div className="pre-inputs">
        <form>
          <label>Original Servings: </label>
          <input
            defaultValue={props.numIngredients}
            onChange={handleNumIngredientsChange}
            type="number"
          />
        </form>
      </div>
    );
  };

/*
        <div className='pre-inputs'>
            <form>
                <input type='number'
                    name='numOriginalServings'
                    value={numOriginalServings}
                    onChange={props.changeOriginalServings(numOriginalServings)}
                />
            </form>
            <h1>{numOriginalServings}</h1>
        </div>
*/