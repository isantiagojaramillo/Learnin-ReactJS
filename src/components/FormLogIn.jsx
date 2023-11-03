import React, {useState} from 'react';
import styles from "../css/FormLogIn.module.css";
import Button from "../elements/Button";

export const FormLogIn = (props) => {
    const [user, changeUser] = useState('');
    const [password, changePassword] = useState('');

    // const onChangeUser = (event) => {
    //     changeUser(event.target.value);
    // }

    // const onChangePassword = (event) => {
    //     changePassword(event.target.value);
    // }

    const onGlobalChange = (event) => {
        if (event.target.name === 'user') {
            changeUser(event.target.value);
        }else if (event.target.name === 'password') {
            changePassword(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
         
        if (user === 'santi' && password === '12345') {
            props.changeSessionState(true);
        }else{
            alert('INCORRECT DATA!');
            changeUser('');
            changePassword('');
        }
    }

  return (
    <form action="" onSubmit={onSubmit} className={styles.form} >
        <h1>You havent logged in</h1>
        <div>
            <label htmlFor="user" className={styles.label}>User</label>
            <input 
                type="text"  
                name='user' 
                id='user'
                value={user}
                onChange={onGlobalChange}
                className={styles.input}
            />
        </div>
        <div>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input 
                type="password"  
                name='password' 
                id='password'
                value={password}
                onChange={onGlobalChange}
                className={styles.input}
            />
            <div className={styles.boxButton}>
                {/* <button type='submit' className={styles.button}>Log in</button> */}
                <Button type='submit'>Log In</Button>
            </div>
        </div>
    </form>
  )
}
