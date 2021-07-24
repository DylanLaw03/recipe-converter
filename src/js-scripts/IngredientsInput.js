import { IngredientsInputBar } from './IngredientsInputBar';

export const IngredientsInput = (props) => {
    let inputBars = [];
    for (let i = 0; i < props.numIngredients; i++) {
        inputBars.push(
                            <IngredientsInputBar
                            newServings={props.newServings}
                            originalServings={props.originalServings} />);
    }
    return inputBars;
}
    