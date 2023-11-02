import React, { Component } from 'react'

// export const ClassCounter = () => {
//   return (
//     <>

//     </>
//   )
// }

class ClassCounter extends Component{

    constructor(props){
        super(props);
        this.state = {counter: 0};
    }

    componentDidMount(){
        console.log('DOM is loaded with the component');
        // CALLING THE API
    }

    componentDidUpdate(pastProperties, pastState){
        console.log('The component updated!');
        console.log('Past properties of the component ' + pastProperties);
        console.log('Past state of the component ' + pastState);
    }

    componentWillUnmount(){
        console.log('Bye Component!');
        // FINISHING THE API
    }

    increase(quantity){
        this.setState((pastState) => {
            return {
                counter: pastState.counter + quantity
            }
        }); 
    }

    drecrease(quantity){
        this.setState((pastState) => {
            return {
                counter: pastState.counter - quantity
            }
        });
    }

    render(){
        return(
            <>
                <h1>Counter {this.state.counter} </h1>
                <button onClick={() => this.increase(this.props.increaseQuantity)}>Increment</button>
                <button onClick={() => this.drecrease(this.props.decreaseQuantity)}>Decrease</button>

            </>
        );
    }
}

export default ClassCounter;
