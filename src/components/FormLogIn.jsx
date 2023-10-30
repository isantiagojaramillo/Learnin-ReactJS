import React, {useState} from 'react'

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
    <form action="" onSubmit={onSubmit}>
        <p>User: {user}</p>
        <p>Password: {password}</p>
        <div>
            <label htmlFor="user">User</label>
            <input 
                type="text"  
                name='user' 
                id='user'
                value={user}
                onChange={onGlobalChange}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
                type="password"  
                name='password' 
                id='password'
                value={password}
                onChange={onGlobalChange}
            />
            <button type='submit'>Log in</button>
        </div>
    </form>
  )
}
