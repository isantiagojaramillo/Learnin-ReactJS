import React, {useState} from 'react';
// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import ClassCounter, {  } from "./components/ClassCounter";
import { FunctionalCounter } from "./components/FunctionalCounter";
import "./css/main.css";
import  Button  from "./elements/Button";
import { ExampleUseReducer } from './components/ExampleUseReducer';


// Exported Components
import  { User  }  from "./components/User";
import { FormLogIn } from "./components/FormLogIn";


const App = () => {
  
  const [session, changeSessionState] = useState(true);

  return (
    <section className='container'>
    {session === true ?
      <>
        <User /> 
        <ExampleUseReducer />
        {/* <FunctionalCounter increaseQuantity={100} decreaseQuantity={20} /> */}
        {/* <button onClick={() => changeSessionState(false)}>Log Out</button> */}
        <Button longButton marginTop onClick={() => changeSessionState(false)}>Log out</Button>
      </>
    : 
      <>
        <FormLogIn changeSessionState = {changeSessionState} />

        {/* <button onClick={() => changeSessionState(true)}>Log in</button> */}
      </>
    }
  </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
