import React, {useReducer} from 'react';
import Button from '../elements/Button'

// ACTION
// {type: 'INCREASE'}

// Initial State
const initialCounter = {counter: 0};

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {counter: state.counter + 100}
            break;

        case 'DECREASE':
            return {counter: state.counter - 50}
            break;

        case 'START OVER':
            return {counter: 0}
            break;
    
        default:
            return state;
            break;
    }
}

export const ExampleUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter);


  return (
    <div>
        <h1>Counter: {state.counter} </h1>
        <Button
            black
            marginRight
            onClick={() => dispatch({type: 'INCREASE'})}
        >
            Increase
        </Button>
        <Button 
            black
            onClick={() => dispatch({type: 'DECREASE'})}
        >
            Decrease
        </Button>

        <Button 
            black
            onClick={() => dispatch({type: 'START OVER'})}
        >
            Start Over
        </Button>
    </div>
  )
}
