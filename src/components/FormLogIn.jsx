import React, {useState} from 'react';
import "./css/FormLogIn.css";

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
    <form action="" onSubmit={onSubmit} className='form'>
        <h1>You havent logged in</h1>
        <div>
            <label htmlFor="user" className='label'>User</label>
            <input 
                type="text"  
                name='user' 
                id='user'
                value={user}
                onChange={onGlobalChange}
                className='input'
            />
        </div>
        <div>
            <label htmlFor="password" className='label'>Password</label>
            <input 
                type="password"  
                name='password' 
                id='password'
                value={password}
                onChange={onGlobalChange}
                className='input'
            />
            <div className='boxButton'>
                <button type='submit' className='button'>Log in</button>
            </div>
        </div>
    </form>
  )
}
