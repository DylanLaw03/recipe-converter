import React, { useCallback, useState } from 'react';

export const PreInputs = (props) => {
    
    //create functions to handle changing variables
    const handleNumIngredientsChange = (e) => {
      const numIngredients = e.target.value;
      if (props.numIngredients > 0) {
        props.changeNumIngredients(numIngredients);
      }
    };
  
    return (
    
      <div className="pre-inputs">
        <form>
          <label>Number of Ingrients: </label>
          <input
            defaultValue={props.numIngredients}
            onChange={handleNumIngredientsChange}
            type="number"
          />
        </form>
      </div>
    );
  };