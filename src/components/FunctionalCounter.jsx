import React, {useState, useEffect} from 'react';
// import styles from "../css/FunctionalCounter.module.css";
import Button from "../elements/Button";

export const FunctionalCounter = (props) => {

    const [account, changeAccount] = useState(0);

    // componentDidMount and componentDidUpdate
    // this hook executes each render cycle
    // useEffect(() => {
    //   console.log('The component is rendered');
    // });

    // componentDidMount.
    // It executes just once.
    // useEffect(() => {
    //   console.log('The component renders its first time');
    //        CONNECTING TO AN API 
    // }, []);

    // It executes only when the state of the dependency changes, in this case 'account'
    // useEffect(() => {
    //   console.log('The counter state changed');
    // }, [account]);

    useEffect(() => {
      // EFFECT CODE

      return(() => {
        console.log('Bye component');
        // CLOSING CONNECTION WITH THE API
      })
    }, []);

    const increase = (quantity) => {changeAccount(account + quantity);}
    const decrease = (quantity) => {changeAccount(account - quantity);}


  return (
    <>
        <h1>Counter: {account} </h1>
        {/* <button className={styles.button} onClick={() => increase(props.increaseQuantity)}>Increment</button>
        <button className={styles.button} onClick={() => decrease(props.decreaseQuantity)}>Decrease</button> */}
        <Button black marginRight onClick={() => increase(props.increaseQuantity)}>Increase</Button>
        <Button black marginRight onClick={() => decrease(props.decreaseQuantity)}>Decrease</Button>
    </>
  )
}