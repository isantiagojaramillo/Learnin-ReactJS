import React, {useState} from 'react'

export const FunctionalCounter = (props) => {

    const [account, changeAccount] = useState(0);
    const increase = (quantity) => {changeAccount(account + quantity);}
    const decrease = (quantity) => {changeAccount(account - quantity);}

  return (
    <>
        <h1>Counter: {account} </h1>
        <button onClick={() => increase(props.increaseQuantity)}>Increment</button>
        <button onClick={() => decrease(props.decreaseQuantity)}>Decrease</button>
    </>
  )
}