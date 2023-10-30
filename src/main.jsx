import React, {useState} from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Exported Components
import  { User  }  from "./components/User";
import { FormLogIn } from "./components/FormLogIn";


const App = () => {
  
  const [session, changeSessionState] = useState(false);

  return (
    <>
    {session === true ?
      <>
        <User /> 
        <button onClick={() => changeSessionState(false)}>Log Out</button>
      </>
    : 
      <>
        <p>You havent logged in</p>
        <FormLogIn changeSessionState = {changeSessionState} />

        {/* <button onClick={() => changeSessionState(true)}>Log in</button> */}
      </>
    }
  </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
