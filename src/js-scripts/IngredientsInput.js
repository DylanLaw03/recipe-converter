import { IngredientsInputBar } from './IngredientsInputBar';

export const IngredientsInput = (props) => {
    let numInputs = [];
    for (let i = 0; i < props.numIngredients; i++) {
        numInputs.push(<IngredientsInputBar />);
    }
    return numInputs;
}
    