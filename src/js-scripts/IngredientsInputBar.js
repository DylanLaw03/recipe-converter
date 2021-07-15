import { useState } from "react";

export const IngredientsInputBar = (props) => {
    //define variables
    const [quantity, setQuantity] = useState(1);
    //create a function to get variables from form
    const getVariables = (e) => {
        const quantity = e.target.value;
        setQuantity(quantity);
    }

    //create fractionalize to convert common decimals to fractions
    const fractionalize = (decimal) => {
        //create onbject with common decimals for keys, and their respective fractions as values
        const fractions = {
            .125: '1/8',
            .250: '1/4',
            .333: '1/3',
            .375: '3/8',
            .500: '1/2',
            .625: '5/8',
            .666: '2/3',
            .750: '3/4',
            .875: '7/8',
            .100: '1/10',
            .200: '2/10',
            .300: '3/10',
            .400: '4/10',
            .600: '6/10',
            .700: '7/10',
            .800: '8/10',
            .900: '9/10',

        }

        //if decimal is in fractions, return the decimal key's value
        if (decimal in fractions) {
            return fractions[decimal];
        }
        //if decimal is not in fractions' keys, return decimal 
        return decimal
        
    }

    return (
        <div>
            <form>
                <input
                    type='number'
                    id='quantity'
                    value={quantity}
                    onChange={getVariables}
                />
            </form>
            <h3>New Quantity: {fractionalize( ( (props.newServings / props.originalServings) * quantity) )}</h3>

        </div>
    );
}