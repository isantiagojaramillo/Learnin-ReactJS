import React, {useState} from 'react';
import styles from "../css/FunctionalCounter.module.css";
import Button from "../elements/Button";

export const FunctionalCounter = (props) => {

    const [account, changeAccount] = useState(0);
    const increase = (quantity) => {changeAccount(account + quantity);}
    const decrease = (quantity) => {changeAccount(account - quantity);}

  return (
    <>
        <h1>Counter: {account} </h1>
        {/* <button className={styles.button} onClick={() => increase(props.increaseQuantity)}>Increment</button>
        <button className={styles.button} onClick={() => decrease(props.decreaseQuantity)}>Decrease</button> */}
        <Button onClick={() => increase(props.increaseQuantity)}>Increase</Button>
        <Button onClick={() => decrease(props.decreaseQuantity)}>Decrease</Button>
    </>
  )
}